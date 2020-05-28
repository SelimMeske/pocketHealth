import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  settings;

  constructor(private http: HttpClient) { }

  saveSettings(userInfo: User){
    
    let userObject: FormData | User;
    
    if(userInfo.profileImg === 'string'){
      userObject = userInfo;
    }

    userObject = new FormData();

    userObject.append('username', userInfo.username);
    userObject.append('gender', userInfo.gender);
    userObject.append('profileImage', userInfo.profileImg);
    userObject.append('age', userInfo.age);
    userObject.append('height', userInfo.height);
    userObject.append('weight', userInfo.weight);
    userObject.append('goalWeight', userInfo.goalWeight);
    userObject.append('activityLevel', userInfo.activityLevel);

    this.http.patch('http://localhost:3000/api/settings', userObject).subscribe(response => {
     
    });
  }

  getSettings(){
    return this.http.get<{userInfo}>('http://localhost:3000/api/settings');
  }

  
}
