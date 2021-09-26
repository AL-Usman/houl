import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanActiveService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     if(sessionStorage.getItem('UserName')) {
       return true;
     } else {
      return false;
     }
  }
}
