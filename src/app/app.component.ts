import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoggedService } from './user-logged.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  UserName: string = '';
  constructor(private http: HttpClient,private userLogged: UserLoggedService) { 
  }

  ngOnInit(): void {  
     if(sessionStorage.getItem('UserName') != null) {  
      this.UserName = sessionStorage.getItem('UserName') as string || '';
      this.userLogged.changeMessage(this.UserName);
     }else
     {
       console.log('no session found');
     }
  }
 
}
