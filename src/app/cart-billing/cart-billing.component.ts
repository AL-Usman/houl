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
  quantity: any = 0;
  constructor(private http: HttpClient,  private router:Router) { }
  //comment added
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
addClick(item: any , event: any) {
  const obj = {
    MedicineID: item.MedicineID,
    UserName: sessionStorage.getItem('UserName'),
    Quantity: event.target.value
  }//api/updateCartData
  this.UpdateCartDataAndGetBillingData(obj).subscribe(res =>
    {
      this.cartbillingData = res;
    }
    ); 
  console.log('every number change function call');
 }

 UpdateCartDataAndGetBillingData(obj: any): Observable<any> {
  return this.http.post<any>('http://localhost:58896/api/updateCartData',obj);
}

minusClick() {
  (document.getElementById('txtInputQuantity') as HTMLInputElement).value = 
  (Number((document.getElementById('txtInputQuantity') as HTMLInputElement).value) - 1).toString()

}
onRemoveClick(item: any) {
  const obj = {
    MedicineID: item.MedicineID,
    UserName: sessionStorage.getItem('UserName')
  }
  this.RemoveMedicineRecord(obj).subscribe(res =>
    {
      this.cartbillingData = res;
    }
    ); 
}
RemoveMedicineRecord(obj: any): Observable<any> {
  return this.http.post<any>('http://localhost:58896/api/removeCartData',obj);
}
}
