import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
islogin =false;
catlist:any;
cart_count:any;
constructor(private router:Router, public api:ApiService){
  if(localStorage.getItem('token'))
  this.islogin=true;
}
  ngOnInit(){
    this.api.fetch_cart_count();
    this.api.getCategoryList().subscribe(res=>{
    this.catlist=res;
})
this.api.cart_list().subscribe((res:any)=>{
  this.cart_count=res.length;
})
  }
logout(){
  if(confirm("Are You Sure..?")){
  localStorage.clear();
  this.router.navigate(['/login']);
  }
}
}
