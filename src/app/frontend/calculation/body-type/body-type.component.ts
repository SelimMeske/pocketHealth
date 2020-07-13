import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body-type',
  templateUrl: './body-type.component.html',
  styleUrls: ['./body-type.component.sass']
})
export class BodyTypeComponent implements OnInit {

  finalAnswer: string;
  progress: string = '';
  progress_int: number = 0;
  currentQuestion: number = 0;
  noOptionChoosed: boolean = false;
  bodyType: string[] = [];
  questions: string[] = [
    'What is your gender ?',
    'Your shoulders width ?',
    'How does a relaxed-fit jeans (with the right waist size) fit you ?',
    'Size of your forearms ?',
    'Your body behaviour ?',
    'Your body look ?',
    "If you encircle your wrist with your other hand's middle finger and thumb...",
    'Weight gain',
    'Your chest size ?'
  ];

  answers = [
    ['Male', 'Female'],
    ['Wider than your hips','The same width as your hips','Narrower than your hips'],
    ['Tight around your glutes', 'Perfect around your glutes', 'Loose around your glutes'],
    ['Big', 'Average', 'Small'],
    ['You carry a bit of extra fat', 'You stay lean, yet muscular', 'You stay skinny'],
    ['Round and soft', 'Square and rugged', 'Long and narrow'],
    ['The middle finger and thumb do not touch', 'The middle finger and thumb just touch', 'The middle finger and thumb overlap'],
    ['You gain weight easily, but find it hard to lose', 'You can gain and lose without too much of a struggle', 'You have trouble gaining weight in the form of muscle or fat'],
    ['43 inches or more', '37-42 inches', '37 inches or less']
  ]
  constructor() { }

  ngOnInit(): void {

  }

  nextQuestion(form: NgForm){
    let answer = form.value.answer;
    let gender = form.value.gender;

    if(this.currentQuestion === 8){
      console.log(this.bodyType)
      this.progress_int += 11.11;
      this.progress = this.progress_int.toString() + '%';
      this.finalAnswer = 'Bodytype';
      return;
    }

    if(!answer){
      this.noOptionChoosed = true;
      return;
    }
    this.noOptionChoosed = false;
    this.bodyType.push(answer);
    
    form.reset();
    
    this.currentQuestion ++;
    this.progress_int += 11.11;
    this.progress = this.progress_int.toString() + '%';
    
    
  }
}
