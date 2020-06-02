import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    
    if(form.invalid){
      return;
    }
    
    const username = form.value.username;
    const password = form.value.password;

    this.authService.loginUser(username, password);
  }

  guestLogin(){
    this.authService.guestLogin();
  }
}
