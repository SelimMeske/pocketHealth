import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSliderChange } from '@angular/material/slider';
import { NgForm, FormControl, Validators } from '@angular/forms';
import * as calculator from 'fitness-health-calculations';

@Component({
  selector: 'app-main-calculations',
  templateUrl: './main-calculations.component.html',
  styleUrls: ['./main-calculations.component.sass']
})
export class MainCalculationsComponent implements OnInit {

  calcPressed: boolean = false;
  currentMode: string;

  pageBannerTitleMap = {
    'bmr': 'Basal Metabolic Rate',
    'tdee': 'Total Daily Energy Expenditure',
    'caloricNeeds': 'Total Daily Caloric Needs'
  }
  pageBannerBackgroundImage = {
    'bmr': 'assets/calc_pic_1.jpg',
    'tdee': 'assets/calc_pic_2.jpg',
    'caloricNeeds': 'assets/calc_pic_3.jpg'
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
  activityMapExtended = {
    0: 'Minimal or no exercise',
    20: 'You Exercise lightly one to three days a week',
    40: 'You exercise moderately three to five days a week',
    60: 'You engage in hard exercise six to seven days a week',
    80: 'You engage in very hard exercise six to seven days a week or have a physical job'
  }
  resultText = {
    'bmr': 'Understanding your BMR, your typical activity level, and the amount of calories you need daily to maintain your weight are important ways for you to actively participate in your physical health. Whether you need to gain weight, maintain your current weight, or lose weight, calculating your BMR is a good place to start.',
    'tdee': 'Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn each day including typical exercise.',
    
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentMode = this.router.url.replace('/', '');
  }
  
  calculate(form: NgForm){
    this.calcPressed = true;
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
