import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoggedService } from '../user-logged.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserName: string = '';
  ProfileData: any;
  constructor(private http: HttpClient, private userLogged: UserLoggedService) { }

  ngOnInit() {
    this.userLogged.userLogged.subscribe(res =>
      {
        this.UserName = res;
        const obj = {
          UserName: this.UserName
        }
        this.getProfileData(obj).subscribe(res => {
          this.ProfileData = res[0];
        });
      }
      );
  }
  getProfileData(obj: any): Observable<any> {
    return this.http.post<any>('http://localhost:58896/api/GetProfileData', obj);
  }
  ChangeUserName(PData: any) {
    const obj = {
      UserID: PData.UserID,
      UserName: (document.getElementById('UserName') as HTMLInputElement).value,
      Password: PData.Password,
      EmailID: PData.EmailAddress,
      PhoneNumber: PData.PhoneNumber
    }
    this.updateProfileData(obj).subscribe(res => {
      this.ProfileData = res[0];
      sessionStorage.setItem('UserName',this.ProfileData.UserName);
      this.userLogged.changeMessage(this.ProfileData.UserName);
    });
   
  }
  ChangePassword(PData: any) {
    const obj = {
      UserID: PData.UserID,
      UserName: PData.UserName,
      Password: (document.getElementById('Password') as HTMLInputElement).value,
      EmailID: PData.EmailAddress,
      PhoneNumber: PData.PhoneNumber
    }
    this.updateProfileData(obj).subscribe(res => {
      this.ProfileData = res[0];
    });
  }
  ChangeEmailAddress(PData: any) {
    const obj = {
      UserID: PData.UserID,
      UserName:PData.UserName,
      Password: PData.Password,
      EmailID: (document.getElementById('email') as HTMLInputElement).value,
      PhoneNumber: PData.PhoneNumber
    }
    this.updateProfileData(obj).subscribe(res => {
      this.ProfileData = res[0];
    });
  }
  ChangePhoneNumber(PData: any) {
    const obj = {
      UserID: PData.UserID,
      UserName: PData.UserName,
      Password: PData.Password,
      EmailID: PData.EmailAddress,
      PhoneNumber:  (document.getElementById('PhoneNumber') as HTMLInputElement).value
    }
    this.updateProfileData(obj).subscribe(res => {
      this.ProfileData = res[0];
    });

  }
  updateProfileData(obj: any): Observable<any> {
    return this.http.post<any>('http://localhost:58896/api/UpdateProfileData', obj);
  }
  //UpdateProfileData
}
