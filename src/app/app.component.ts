import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  forbidenRoutes = ['/login', '/register']
  constructor(public router: Router) {}

  title = 'pocketHealth';
}
