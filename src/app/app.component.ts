import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(public router: Router) {}
  
  ngOnInit(){
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        (<any>window).ga('set', 'page', e.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
        window.scroll(0, 0);
      }
    })
  }

  ngOnDestroy(){
    
  }

  title = 'pocketHealth';
}
