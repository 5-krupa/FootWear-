import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart_data:any;
  loading:any=true;
constructor(private api:ApiService){}
ngOnInit(){
this.api.cart_list().subscribe(res=>{
console.log(res);
this.cart_data=res;
this.loading=false;
});
}
incqty(product_econ_cart_id:any){
this.api.incqty(product_econ_cart_id).subscribe(res=>{
  console.log(res);
  this.ngOnInit();
})
}
decqty(product_econ_cart_id:any){
  this.api.decqty(product_econ_cart_id).subscribe(res=>{
    console.log(res);
    this.ngOnInit();
  })
  }
  removeProduct(product_econ_cart_id:any){
    this.api.removeProduct(product_econ_cart_id).subscribe((res:any)=>{
      console.log(res);
      this.api.fetch_cart_count();
      this.ngOnInit();  
    })
    }
}

