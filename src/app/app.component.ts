import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  
  private successMsgSub = new Subscription;
  forbidenRoutes = ['/login', '/register']
  
  constructor(public router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}
  
  ngOnInit(){
    this.authService.autoAuth();
    this.successMsgSub = this.authService.getSuccessMessages().subscribe(message => {
      this.snackBar.open(message, '', {duration: 2000, panelClass: 'successBar'});
    });
  }

  ngOnDestroy(){
    this.successMsgSub.unsubscribe();
  }

  title = 'pocketHealth';
}
