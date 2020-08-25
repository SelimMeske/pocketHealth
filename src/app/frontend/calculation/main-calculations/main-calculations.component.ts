import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSliderChange } from '@angular/material/slider';
import { NgForm} from '@angular/forms';
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
    'caloric-needs': 'Total Daily Caloric Needs',
    'ideal-weight': 'Your Ideal Body Weight'
  }
  pageBannerBackgroundImage = {
    'bmr': 'assets/pc-images/calc-pic-pc-1.jpg',
    'tdee': 'assets/pc-images/calc-pic-pc-2.png',
    'caloric-needs': 'assets/pc-images/calc-pic-pc-3.jpg',
    'ideal-weight': 'assets/pc-images/calc-pic-pc-4.jpg'
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
    console.log(this.currentMode);
  }
  
  calculate(form: NgForm){
    console.log('start')
    this.calcPressed = true;
    let gender = form.value.gender;
    let weight = +form.value.weight;
    let height = +form.value.height;
    let age = +form.value.age;
    let activity_level = this.activityMap[this.activity].toLowerCase();
    let goal = form.value.goal;
    let approach = form.value.approach;
    let units = form.value.units;

    if(!approach) {
      approach = 'normal';
    }

    if(this.currentMode !== 'ideal-weight'){
      console.log('in if statemnt')
      if(!gender || !weight || !height || !age){
        console.log('RETURNED')
        return;
      }
    } 
    console.log('OUT of')
    if(this.currentMode === 'bmr'){
      this.result = calculator.bmr(gender, age, height, weight);
    }else if(this.currentMode === 'tdee') {
      this.result = calculator.tdee(gender, age, height, weight, activity_level);
    }else if(this.currentMode === 'caloric-needs') {
      this.result = calculator.caloricNeeds(gender, age, height, weight, activity_level, goal, approach);
    }else if(this.currentMode === 'ideal-weight') {
      let measurement = 'kg';

      if(units === 'imperial'){
        measurement = 'lbs';
      }

      this.result = calculator.idealBodyWeight(height, gender, units) + ' '+  measurement;
    }
    
  }

  slideEvent(event: MatSliderChange){
    this.activity = event.value;
  }

}
