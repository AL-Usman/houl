import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient,private toastr: ToastrService,
    private router:Router) { }
  cartSearchData: any;
  cartCount: any;
  ngOnInit(): void {
  }
  onKey(event: any) {
    const obj = {
      SearchText: event.target.value
    }
    this.searchMedecineByText(obj).subscribe(res => {
      console.log(res);
           this.cartSearchData = res;
    });
  }
  showSuccess() {
    this.toastr.success('Successfull...', 'Item Saved in cart');
  }
  showError() {
    this.toastr.error('Somthing went wrong..', 'No item');
  }
  searchMedecineByText(searchText: any): Observable<any> {
   
    return this.http.post<any>('http://localhost:58896/api/getCartData',searchText);
}
saveCartData(item: any) {
  const obj = {
    MedicineID: item.MedicineID,
    UserName: sessionStorage.getItem('UserName'),
    Quantity: (document.getElementById('quantity') as HTMLInputElement).value
  }
  this.saveCartDatainDB(obj).subscribe( res=> {
    debugger;
   this.cartCount = res[0].CountValue;
   console.log(this.cartCount);
  })
  this.showError();
  (document.getElementById('quantity') as HTMLInputElement).value = 
  
  (document.getElementById('quantity') as HTMLInputElement).value + '1';
}

saveCartDatainDB(cartData: any): Observable<any> {
  console.log('calling api funtion');
  return this.http.post<any>('http://localhost:58896/api/saveCartData',cartData);
}

navigateToCart() {
  this.router.navigate(['/cartBilling']);
}
}
