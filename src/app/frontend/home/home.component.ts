import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth <= 550) {
      let allCards = document.querySelectorAll('.mat-card');
      
      let currentElem = 1;
     
      allCards.forEach(e => {
        (e as HTMLDivElement).style.backgroundImage = `url('assets/calc_pic_${currentElem}.jpg')`;
        console.log(e)
        currentElem += 1;
      });
    }
  }
  

}
