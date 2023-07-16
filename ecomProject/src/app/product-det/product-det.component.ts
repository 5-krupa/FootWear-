import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-det',
  templateUrl: './product-det.component.html',
  styleUrls: ['./product-det.component.scss']
})
export class ProductDetComponent implements OnInit{
  product_info:any;
  product_id:any;
  loading:any=true;
  constructor(private activatedroute:ActivatedRoute, private api:ApiService, private router:Router){}
 ngOnInit(){
 this.activatedroute.params.subscribe((res:any)=>{
  this.product_id=res.pid;

  this.api.product_by_id(this.product_id).subscribe(res=>{
    console.log(res);
    this.product_info=res;
    this.loading=false;
  });
});
 }
addcart(){
  if(localStorage.getItem('token')){
  this.api.addtocart(this.product_id).subscribe(res=>{
    this.ngOnInit();
    this.api.fetch_cart_count();
  });
  }
  else{
    this.router.navigate(['/login']);
  }
}
}
