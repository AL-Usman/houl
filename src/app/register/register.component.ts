import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registrationForm = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
    EmailID: new FormControl(''),
    PhoneNumber: new FormControl(''),
    createdDate: new FormControl(Date()) ,
  });

  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {

  }

  onSaveClick() {
    console.log('printing form value');
    console.log(this.registrationForm.value);
    this.UserData().subscribe(res=>
      console.log(res));
    this.saveUserData().subscribe(res=>
      console.log(res));
  }
  UserData(): Observable<any> {
    return this.http.get<any>('http://localhost:58896/api/GetRegistrationData');
}
  saveUserData(): Observable<any> {
    return this.http.post<any>('http://localhost:58896/api/SaveRegistrationData',this.registrationForm.value);
}

}
