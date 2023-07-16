import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order-address',
  templateUrl: './confirm-order-address.component.html',
  styleUrls: ['./confirm-order-address.component.scss']
})
export class ConfirmOrderAddressComponent {
  constructor(private api:ApiService, private router:Router){}
addressForm =new FormGroup({
  'area':new FormControl(''),
  'city':new FormControl(''),
  'district':new FormControl(''),
  'state':new FormControl(''),
  'country':new FormControl(''),
  'pincode':new FormControl(''),
  'payment_type':new FormControl(''),
});
placeOrder(){
  this.api.place_order(this.addressForm.value).subscribe((res:any)=>{
    if(res.status=='success'){
      this.router.navigate(['/order_det/'+res.order_id]);
      alert("Order placed");
    }
    else{
      alert("failed");
    }
  });
}
}
