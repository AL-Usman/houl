import { Component, OnInit } from '@angular/core';
import { CanActiveService } from '../can-active.service';
import { UserLoggedService } from '../user-logged.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  UserName: string = '';
  loggedUser: boolean = false;
  constructor(private userLogged: UserLoggedService) {
   
      this.userLogged.userLogged.subscribe(message => 
        {
          this.UserName = message;
          if(this.UserName != '') {
            this.loggedUser = true;
          }else {
            this.loggedUser = false;
          }
        });
     }

  ngOnInit(): void {
    this.userLogged.userLogged.subscribe(message => 
        {
          this.UserName = message;
          if(this.UserName != '') {
            this.loggedUser = true;
          }else {
            this.loggedUser = false;
          }
        });
  }
  logOut() {
    sessionStorage.removeItem('UserName');
    this.userLogged.changeMessage('');
  }
}
