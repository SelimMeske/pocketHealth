import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body-type',
  templateUrl: './body-type.component.html',
  styleUrls: ['./body-type.component.sass']
})
export class BodyTypeComponent implements OnInit {

  finalAnswer: string;
  resultImage: string;

  progress: string = '';
  progress_int: number = 0;
  currentQuestion: number = 0;
  noOptionChoosed: boolean = false;

  gender: string;

  ectomorph: number = 0;
  mesomorph: number = 0;
  endomorph: number = 0;

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
    ['Wider than your hips', 'The same width as your hips', 'Narrower than your hips'],
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

  nextQuestion(form: NgForm) {
    let currentAnswer = form.value.answer;

    if (currentAnswer === 'male' || currentAnswer === 'female') {
      this.gender = currentAnswer;
    } else if (+currentAnswer === 0) {
      this.endomorph += 1;
    } else if (+currentAnswer === 1) {
      this.mesomorph += 1;
    } else if (+currentAnswer === 2) {
      this.ectomorph += 1;
    }

    if (this.currentQuestion === 8) {
      if (this.endomorph === this.mesomorph) {
        this.finalAnswer = 'Mesomorph';
      } else if (this.endomorph === this.ectomorph) {
        this.finalAnswer = 'Endomorph';
      } else if (this.mesomorph === this.ectomorph) {
        this.finalAnswer = 'Mesomorph';
      } else if (this.mesomorph > this.endomorph && this.mesomorph > this.ectomorph) {
        this.finalAnswer = 'Mesomorph';
      } else if (this.ectomorph > this.endomorph && this.ectomorph > this.mesomorph) {
        this.finalAnswer = 'Ectomorph';
      } else if (this.endomorph > this.ectomorph && this.endomorph > this.mesomorph) {
        this.finalAnswer = 'Endomorph';
      }

      if (this.gender === 'female') {

        if (this.finalAnswer === 'Mesomorph') {
          this.resultImage = 'assets/mesomorph-f.png';
        } else if (this.finalAnswer === 'Endomorph') {
          this.resultImage = 'assets/endomorph-f.png';
        } else if (this.finalAnswer === 'Ectomorph') {
          this.resultImage = 'assets/ectomorph-f.png';
        }

      } else {

        if (this.finalAnswer === 'Mesomorph') {
          this.resultImage = 'assets/mesomorph.png';
        } else if (this.finalAnswer === 'Endomorph') {
          this.resultImage = 'assets/endomorph.png';
        } else if (this.finalAnswer === 'Ectomorph') {
          this.resultImage = 'assets/ectomorph.png';
        }

      }

      this.progress_int += 11.11;
      this.progress = this.progress_int.toString() + '%';
      return;
    }

    if (!currentAnswer) {
      this.noOptionChoosed = true;
      return;
    }

    this.noOptionChoosed = false;


    form.reset();

    this.currentQuestion++;
    this.progress_int += 11.11;
    this.progress = this.progress_int.toString() + '%';


  }
}
