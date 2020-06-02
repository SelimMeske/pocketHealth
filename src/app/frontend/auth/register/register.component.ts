import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){

    if(form.invalid){
      return;
    }
    const username = form.value.username;
    const password = form.value.password;

    this.authService.registerUser(username, password);
  }
}
