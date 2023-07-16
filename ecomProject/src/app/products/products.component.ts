import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  cat_id = 0;
  plist:any;
  loading:any=true;
  constructor (private activatedroute:ActivatedRoute, private api:ApiService){
  this.activatedroute.params.subscribe((res:any)=>{
    console.log(res);
    this.cat_id=res.cat_id;

    this.api.products_by_cat_id(this.cat_id).subscribe((res)=>{
      console.log(res);
      this.plist =res;
      this.loading=false;
    });
  });
}
}
