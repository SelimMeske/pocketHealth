import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supp-stack',
  templateUrl: './supp-stack.component.html',
  styleUrls: ['./supp-stack.component.sass']
})
export class SuppStackComponent implements OnInit {

  finalAnswer: string;

  progress: string = '';
  progress_int: number = 0;
  currentQuestion: number = 0;
  noOptionChoosed: boolean = false;

  gender: string;

  

  dynamicStyle: string[] = [
    "z-index: 10; transform: scale(1.2);",
    "transform: translateX(60px) rotate(15deg); z-index: 9;",
    "transform: translateX(-60px) rotate(-15deg); z-index: 9;",
    "transform: translateX(110px) translateY(40px) rotate(25deg) scale(0.6); z-index: 8;",
    "transform: translateX(-110px) translateY(40px) rotate(-25deg) scale(0.6); z-index: 8;",
  ]

  dynamicStylePc: string[] = [
    "z-index: 10; transform: scale(1.2);",
    "transform: translateX(90px) rotate(25deg); z-index: 9;",
    "transform: translateX(-90px) rotate(-25deg); z-index: 9;",
    "transform: translateX(160px) translateY(70px) rotate(35deg) scale(0.6); z-index: 8;",
    "transform: translateX(-160px) translateY(70px) rotate(-35deg) scale(0.6); z-index: 8;",
  ]

  supplements = {
    'whey': ['Impact Whey Protein', 'It’s fast-absorbing, so we recommend adding 1 large scoop (25g) to 150-250ml of water post-workout — but it’s ideal any time for a convenient way to get the protein you need.','https://www.myprotein.com/sports-nutrition/impact-whey-protein/10530943.html', 'assets/whey.png'],
    'creatine': ['Creatine Monohydrate Elite', 'To reap the benefits of this product we recommend adding 2 small scoops (5g) to 150-250ml of water or juice before, during, and/or after exercise. Beneficial effect is obtained with a daily intake of 3 g of creatine.','https://www.myprotein.com/sports-nutrition/creatine-monohydrate-elite/10872819.html', 'assets/creatine.png'],
    'bcaa': ['Essential BCAA 2:1:1 Powder', 'To reap the benefits of this high quality BCAA powder add 2 small scoops (5g) to 250-350ml of water or juice in a Myprotein shaker on fasting periods, before, during, and/or after exercise.','https://www.myprotein.com/sports-nutrition/essential-bcaa-2-1-1-powder/10529280.html', 'assets/bcaa.png'],
    'pre': ['THE Pre-Workout', 'For best results, have 30 minutes before your workout — mix 1 scoop with 300-400ml of water.', 'https://www.myprotein.com/sports-nutrition/the-pre-workout/11351672.html', 'assets/pre.png'],
    'maleVitamin': ['Multivitamin Tablets', 'Multivitamin Tablets', 'https://www.myprotein.com/sports-nutrition/alpha-men-multivitamin-tablets/10530421.html', 'assets/vit-m.png'],
    'femaleVitamin': ['Multivitamin Tablets', 'Multivitamin Tablets', 'https://www.myprotein.com/sports-nutrition/multivitamin/10530541.html', 'assets/vit-f.png']
  }

  questions: string[] = [
    'What is your gender?',
    'In how many meals a day you consume highly packed protein foods (meat, dairy, nuts, and seeds)?',
    'Do you prefer a more bulky/full muscle look or toned well-defined muscle structure?',
    'Are you currently practicing any diets which are demanding fasting periods, in which you are not consuming any calories? e.g. Intermittent Fasting?',
    'How would you describe your energy level during the workout?',
    'Do you regularly consume vegetables, greens, and fruits on a daily basis?'
  ];

  answers = [
    ['Male', 'Female'],
    ['One', 'Two', 'Three', 'More than three'],
    ['I prefer a bulky/full muscle look', 'I prefer a toned, well-defined muscle structure'],
    ['Yes', 'No'],
    ['Tired and exhausted', 'Somwhere energized but can benefit from energy boots', 'Well-rested and energized'],
    ['Yes, every day', 'Sometimes', 'Not really']
  ]

  supplementStack = [];

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth > 708){
      this.dynamicStyle = this.dynamicStylePc;
    }
  }

  nextQuestion(form: NgForm) {
    let currentAnswer = form.value.answer;

    switch (currentAnswer) {
      case 'male':
        this.gender = currentAnswer;
        break;
      case 'female':
        this.gender = currentAnswer;
        break;
      case 'One':
      case 'Two':
      case 'Three':
        this.supplementStack.push(this.supplements['whey']);
        break;
      case 'More than three':
        break;
      case 'I prefer a bulky/full muscle look':
        this.supplementStack.push(this.supplements['creatine']);
        break;
      case 'I prefer a toned, well-defined muscle structure':
        break;   
      case 'Yes':
        this.supplementStack.push(this.supplements['bcaa']);
        break;
      case 'No':
        break;
      case 'Tired and exhausted':
      case 'Somwhere energized but can benefit from energy boots':
        this.supplementStack.push(this.supplements['pre']);
        break;
      case 'Well-rested and energized':
        break;
      case 'Yes, every day':
        break;
      case 'Sometimes':
      case 'Not really':
        if(this.gender === 'male'){
          this.supplementStack.push(this.supplements['maleVitamin']);
        }else {
          this.supplementStack.push(this.supplements['femaleVitamin']);
        }
        break;
    }

    if (!currentAnswer) {
      this.noOptionChoosed = true;
      return;
    }

    if (this.currentQuestion === 5) {
      this.progress_int += 16.66;
      this.progress = this.progress_int.toString() + '%';
      if(this.supplementStack.length <= 0) {
        this.supplementStack = [this.supplements['whey'], this.supplements['creatine'], this.supplements['bcaa']];
      }
      this.finalAnswer = 'final';
      return;
    }

    this.noOptionChoosed = false;


    form.reset();

    this.currentQuestion++;
    this.progress_int += 16.66;
    this.progress = this.progress_int.toString() + '%';


  }
  // Google A. button tracker
  googleABuyButton = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Supplement stack',
      eventLabel: 'Buy button',
      eventAction: 'Supplement stack buy button',
      eventValue: 10
    });
  }
}
