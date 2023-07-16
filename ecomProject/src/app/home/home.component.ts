import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
slider_data:any;
category_data:any;
best_seller_products:any;
loading:any =true;
constructor(private api:ApiService){}
ngOnInit(){

  this.api.getSliderList().subscribe((res:any)=>{
    this.slider_data=res;
  });

  this.api.getCategoryList().subscribe((res:any)=>{
    this.category_data=res;
  });
  
  this.api.getProductList().subscribe((res:any)=>{
    this.best_seller_products=res;
    this.loading=false;
  })
  // this.api.demoApi().subscribe((res:any)=>{
  //   console.log(res);
  // })
}
}
