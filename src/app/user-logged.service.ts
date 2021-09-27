import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {
  private user = new BehaviorSubject(sessionStorage.getItem('UserName')?.toString() || '');
  userLogged = this.user.asObservable();
  constructor() {
  }
  changeMessage(userName: string) {
    this.user.next(userName);
  }
}
