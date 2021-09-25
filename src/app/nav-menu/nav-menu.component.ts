import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  UserName?: string;
  constructor() { }
  ngOnInit(): void {
    this.UserName = sessionStorage.getItem('UserName')?.toString();
  }
  onClickLogin() {
    if((document.getElementById('login') as HTMLElement).innerHTML == "Logout"){
      (document.getElementById('login') as HTMLElement).innerHTML = "Login";
    }else {
      (document.getElementById('login') as HTMLElement).innerHTML = "Logout";
    }
  }
}
