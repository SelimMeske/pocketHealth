import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as calculator from "fitness-health-calculations";

@Component({
  selector: 'app-tdee',
  templateUrl: './tdee.component.html',
  styleUrls: ['./tdee.component.sass']
})
export class TdeeComponent implements OnInit {
  
  result: string;
  activity: number = 0;
  activityMap = {
    0: 'Sedentary',
    20: 'Light',
    40: 'Moderate',
    60: 'High',
    80: 'Extreme'
  }
  constructor() { }

  ngOnInit(): void {
    
  }

  calculate(form: NgForm){

    let gender = form.value.gender;
    let weight = form.value.weight;
    let height = form.value.height;
    let age = form.value.age;
    let activity_level = form.value.activity;

    if(!gender || !weight || !height || !age){
      return;
    }

    this.result = calculator.tdee(gender, age, height, weight, activity_level);
  }
  
  
}
