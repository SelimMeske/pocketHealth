import { Component, OnInit } from '@angular/core';
import * as calculator from 'fitness-health-calculations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.sass']
})
export class BmrComponent implements OnInit {

  result: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  calculate(form: NgForm){
    let gender = form.value.gender;
    let age = +form.value.age;
    let height = +form.value.height;
    let weight = +form.value.weight;
    
    if(!age || !height || !weight) {
      return;
    }
    
    this.result = calculator.bmr(gender, age, height, weight);
  }
}
