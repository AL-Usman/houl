import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel } from './register-model';
@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  readonly url = 
  'http://localhost:44386/api/SaveRegistrationData';
    
  constructor(private http: HttpClient) { }
  
  getStatisticsData(obj: any): Observable<RegisterModel[]> {
        return this.http.post<RegisterModel[]>(this.url,obj);
    }

}
