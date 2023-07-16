import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-det',
  templateUrl: './order-det.component.html',
  styleUrls: ['./order-det.component.scss']
})
export class OrderDetComponent implements OnInit {
  orderdata: any = {};
constructor(private activatedroute:ActivatedRoute, private api:ApiService){}
ngOnInit(){
  this.activatedroute.params.subscribe((res:any)=>{
    // console.log(res.order_id);
    this.api.order_det(res.order_id).subscribe(res2=>{
      console.log(res2);
      this.orderdata=res2; 
    }) 
  });
}
}

