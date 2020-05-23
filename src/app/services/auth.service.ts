import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean = false;
  private token: string;
  private authSubject = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(username: string, password: string){
    const userInfo = {username: username, password: password}
    this.http.post('http://localhost:3000/api/users', userInfo).subscribe(response => {
      
    });
  }

  loginUser(username: string, password: string){
    const userInfo = {username: username, password: password};
    this.http.post<{token: string, expTime: string}>('http://localhost:3000/api/users/login', userInfo).subscribe(response => {
      this.token = response.token;
      let expTime = +response.expTime;
      /**Save token to localstorage */
      let now = new Date().getTime();
      let tokenExp = new Date(now + expTime * 1000);
      this.saveToLocal(this.token, tokenExp);
      this.isAuth = true;
      this.router.navigate(['/']);
    });
  }

  logout(){
    this.isAuth = false;
    this.token = '';
    this.clearLocal();
    this.router.navigate(['/login']);
  }

  setTimer(time){
    setTimeout(() => {
      this.logout();
    }, time * 1000);
  }

  authStatus(){
    if(!this.isAuth){
      this.router.navigate(['/login']);
    }
  }

  authStatusSub(){
    return this.authSubject.asObservable();
  }

  saveToLocal(token: string, expTime: Date){
    localStorage.setItem('token', token);
    localStorage.setItem('expTime', expTime.toISOString());
  }

  clearLocal(){
    localStorage.removeItem('token');
    localStorage.removeItem('expTime');
  }

  getLocalStorageInfo(){
    let token = localStorage.getItem('token');
    let expTime = localStorage.getItem('expTime');

    if(!token || !expTime){
      return;
    }

    return {
      token: token,
      expTime: new Date(expTime)
    }
  }

  autoAuth(){
    let authInfo = this.getLocalStorageInfo();

    if(!authInfo){
      return;
    }

    let isExpired = authInfo.expTime.getTime() - new Date().getTime();
    if(isExpired > 0){
      this.isAuth = true;
      this.token = authInfo.token;
      this.setTimer(isExpired/1000);
    }
  }

  getToken(){
    return this.token;
  }
}
