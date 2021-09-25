import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  UserName:string = '';
  @Output() public afterClick: EventEmitter<string> = new EventEmitter();
  constructor(private http: HttpClient,private router:Router) { }
  ngOnChanges() {
  }
  
  ngOnInit(): void {
  }

  checkUser(){
    const obj = {
      userName: (document.getElementById('user') as HTMLInputElement).value,
      Password: (document.getElementById('password') as HTMLInputElement).value
    }
    this.userAPICall(obj).subscribe(res => {
      this.UserName = res.Table[0].UserName;
    });
    sessionStorage.setItem('UserName',this.UserName);
   }


  userAPICall(obj: any): Observable<any>{
    return this.http.post<any>('http://localhost:58896/api/CheckUserNameAndPassword',obj);
 }
}
