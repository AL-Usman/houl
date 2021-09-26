import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {
  private user = new BehaviorSubject('');
  userLogged = this.user.asObservable();
  constructor() { }
  changeMessage(userName: string) {
     this.user.next(userName);
  }
}
