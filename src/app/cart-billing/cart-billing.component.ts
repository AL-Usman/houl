import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-billing',
  templateUrl: './cart-billing.component.html',
  styleUrls: ['./cart-billing.component.css']
})
export class CartBillingComponent implements OnInit {
  cartbillingData: any;
  constructor(private http: HttpClient,  private router:Router) { }

  ngOnInit() {
    const obj = {
      UserName: sessionStorage.getItem('UserName')
    }
    this.loadCartBillingData(obj).subscribe(res=> {
this.cartbillingData = res;
    })
  }
  loadCartBillingData(obj: any): Observable<any> {
    return this.http.post<any>('http://localhost:58896/api/CartBilling',obj);
}
}
