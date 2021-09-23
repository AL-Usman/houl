import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../register-user.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    createdDate: new FormControl(Date()) ,
  });

  readonly url = 'http://localhost:44386/api/SaveRegistrationData';
  constructor(private registerUserService: RegisterUserService) { }
 
  ngOnInit(): void {

  }

  onSaveClick() {
    console.log(this.registrationForm.value);

    this.registerUserService.getStatisticsData(this.registrationForm.value).subscribe(res=>
      console.log(res));
  }
}
