import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  isAuthenticated: boolean = false;
  private authSub = new Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.autoAuth();
    this.isAuthenticated = this.authService.authStatus();
    console.log('home component ->' + this.isAuthenticated)
  }
  
  ngOnDestroy(){
    this.authSub.unsubscribe();
  }

}
