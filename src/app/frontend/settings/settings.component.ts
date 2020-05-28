import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material/slider';
import { mimeType } from '../mime-type-validator';
import { MainService } from 'src/app/services/main.service';
import { User } from 'src/app/interfaces/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  userSettings;
  imgUrl: string;
  activity: number = 0;
  activityMap = {
    0: 'Sedentary',
    20: 'Light',
    40: 'Moderate',
    60: 'High',
    80: 'Extreme'
  }

  formGroup: FormGroup;

  constructor(private mainService: MainService, private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.autoAuth();
   
    this.formGroup = new FormGroup({
      username: new FormControl(null, {validators: [Validators.maxLength(255), Validators.required]}),
      profileImage: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]}),
      gender: new FormControl(null, {validators: [Validators.maxLength(255), Validators.required]}),
      age: new FormControl(null, {validators: [Validators.maxLength(255), Validators.required]}),
      height: new FormControl(null, {validators: [Validators.maxLength(255), Validators.required]}),
      weight: new FormControl(null, {validators: [Validators.maxLength(255), Validators.required]}),
      goalWeight: new FormControl(null, {validators: [Validators.maxLength(255), Validators.required]}),
      activityLevel: new FormControl(null, {validators: [Validators.required]})
    })

    this.mainService.getSettings().subscribe(response => {
      this.userSettings = response.userInfo;
      console.log(this.userSettings)
      this.formGroup.setValue({username: this.userSettings.username, profileImage: this.userSettings.profileImg, gender: this.userSettings.gender, age: this.userSettings.age, height: this.userSettings.height, weight: this.userSettings.weight, goalWeight: this.userSettings.goalweight, activityLevel: this.userSettings.activitylevel})
      this.imgUrl = this.userSettings.profileImg;
    });
    
  }

  slideEvent(event: MatSliderChange){
    this.activity = event.value;
  }

  imageChanged(event: Event){
    let image = (event.target as HTMLInputElement).files[0];
    this.formGroup.patchValue({profileImage: image});
    this.formGroup.get('profileImage').updateValueAndValidity();

    let reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = () => {
      let url = reader.result as string;
      this.imgUrl = url;
    }
  } 

  submitSettings(){
    
    if(this.formGroup.invalid){
      console.log('invalid form');
      return;
    }
    let userSettings: User = {username: this.formGroup.value.username, profileImg: this.formGroup.value.profileImage, gender: this.formGroup.value.gender, age: this.formGroup.value.age, height: this.formGroup.value.height, weight: this.formGroup.value.weight, goalWeight: this.formGroup.value.goalWeight, activityLevel: this.formGroup.value.activityLevel}
    this.mainService.saveSettings(userSettings);
  }


}
