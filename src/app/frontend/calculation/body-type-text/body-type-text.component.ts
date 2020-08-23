import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-type-text',
  templateUrl: './body-type-text.component.html',
  styleUrls: ['./body-type-text.component.sass']
})
export class BodyTypeTextComponent implements OnInit {

  @Input() bodyType: string;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.setIcons();
    },5);
  }


  setIcons(){
    let parentAdv = document.querySelectorAll('.checklist');
    console.log(parentAdv);
    parentAdv.forEach(el => {
      
      let liElementsAdv = el.children;
      for(let i = 0; i < liElementsAdv.length; i++) {
        let checkIcon = document.createElement('img');
        checkIcon.src = 'assets/check.png';
        checkIcon.style.width = '12px';
        checkIcon.style.marginRight = '5px';
        liElementsAdv[i].prepend(checkIcon);
      }
    });

    let parentDis = document.querySelectorAll('.disadv');
    parentDis.forEach(el => {
      let liElementsDis = el.children;
      for(let i = 0; i < liElementsDis.length; i++) {
        let checkIcon = document.createElement('img');
        checkIcon.src = 'assets/close.png';
        checkIcon.style.width = '12px';
        checkIcon.style.marginRight = '5px';
        liElementsDis[i].prepend(checkIcon);
      }
    });
  }
}
