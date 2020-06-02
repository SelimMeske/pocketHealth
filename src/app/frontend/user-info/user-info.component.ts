import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { User } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  userInfo;
  userImage: string = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
  constructor(private mainService: MainService) { }

  ngOnInit(): void {

    this.mainService.getSettings().subscribe(response => {
      
      if(!response.userInfo.profileImg){
        return;
      }
      this.userInfo = response.userInfo;
      this.userImage = this.userInfo.profileImg;
    
    });
    
  }

}
