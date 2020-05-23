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
    this.authService.authStatus();
    this.authSub = this.authService.authStatusSub().subscribe(response => {
      this.isAuthenticated = response;
    });
  }
  
  ngOnDestroy(){
    this.authSub.unsubscribe();
  }

}
