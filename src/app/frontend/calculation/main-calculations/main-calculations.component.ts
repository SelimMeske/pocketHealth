import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSliderChange } from '@angular/material/slider';
import { NgForm } from '@angular/forms';
import * as calculator from 'fitness-health-calculations';

@Component({
  selector: 'app-main-calculations',
  templateUrl: './main-calculations.component.html',
  styleUrls: ['./main-calculations.component.sass']
})
export class MainCalculationsComponent implements OnInit {

  currentMode: string;
  pageBannerTitleMap = {
    'bmr': 'Basal Metabolic Rate',
    'tdee': 'Total Daily Energy Expenditure',
    'caloricNeeds': 'Total Daily Caloric Needs'
  }
  result: string;
  activity: number = 0;
  activityMap = {
    0: 'Sedentary',
    20: 'Light',
    40: 'Moderate',
    60: 'High',
    80: 'Extreme'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentMode = this.router.url.replace('/', '');
  }
  
  calculate(form: NgForm){
    let gender = form.value.gender;
    let weight = +form.value.weight;
    let height = +form.value.height;
    let age = +form.value.age;
    let activity_level = this.activityMap[this.activity].toLowerCase();
    let goal = form.value.goal;
    let approach = form.value.approach;

    if(!approach) {
      approach = 'normal';
    }

    if(!gender || !weight || !height || !age){
      return;
    }

    if(this.currentMode === 'bmr'){
      this.result = calculator.bmr(gender, age, height, weight);
    }else if(this.currentMode === 'tdee') {
      this.result = calculator.tdee(gender, age, height, weight, activity_level);
    }else if(this.currentMode === 'caloricNeeds') {
      this.result = calculator.caloricNeeds(gender, age, height, weight, activity_level, goal, approach);
    }
    
  }

  slideEvent(event: MatSliderChange){
    this.activity = event.value;
  }

}
