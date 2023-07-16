import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
cart_count=0;
  constructor(private http:HttpClient) { }
  base_url='https://a2zithub.org/dairy/abi/';
  getSliderList(){
    return this.http.get(this.base_url+'slider_det'); 
  }
  getCategoryList(){
    return this.http.get(this.base_url+'product_cat_details');
  }
  getProductList(){
    return this.http.get(this.base_url+'product_det');
  }
  registerUser(obj:any){
    return this.http.post(this.base_url+'user_register',obj);
  }
  loginUser(obj:any){
    return this.http.post(this.base_url+'user_login',obj);
  }
  products_by_cat_id(cat_id:any){
    var obj={'cat_id':cat_id};
    return this.http.post(this.base_url+'products_by_cat',obj);
  }
  product_by_id(pid:any){
    var obj={'product_id':pid,'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+"product_by_id",obj);
  }
  addtocart(pid:any){
    var obj={'product_id':pid,'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+"addtocart",obj);
  }
  cart_list(){
    var obj={'token':localStorage.getItem('token')};
    return this.http.post(this.base_url+"cart_list",obj);
  }
  fetch_cart_count(){
    var obj={'token':localStorage.getItem('token')};
    this.http.post(this.base_url+"cart_list",obj).subscribe((res:any)=>{
    this.cart_count=res.length;  
  });
  }
  incqty(product_econ_cart_id:any){
    var obj={'token':localStorage.getItem('token'),'product_econ_cart_id':product_econ_cart_id};
    return this.http.post(this.base_url+"inc_cart_qty",obj);
    }
    decqty(product_econ_cart_id:any){
      var obj={'token':localStorage.getItem('token'),'product_econ_cart_id':product_econ_cart_id};
      return this.http.post(this.base_url+"dec_cart_qty",obj);
      }
      removeProduct(product_econ_cart_id:any){
        this.fetch_cart_count();
        var obj={'token':localStorage.getItem('token'),'product_econ_cart_id':product_econ_cart_id};
        return this.http.post(this.base_url+"remove_cart_qty",obj);
      }
      place_order(obj:any){
        obj.token =localStorage.getItem('token');
        return this.http.post(this.base_url+"place_order",obj);
      }
      order_det(order_id:any){
        var obj={"token":localStorage.getItem('token'),'order_id':order_id};
        return this.http.post(this.base_url+"order_det",obj);
      }
      // invoice(){
      //   var obj={'token':localStorage.getItem('token')};
      //   return this.http.post(this.base_url+"invoice",obj);
      // }
      // demoApi(){
      //   var obj={"uname":"abcd"};
      //   return this.http.post("https://a2zithub.org/demo_api.php",obj);
      // }
}
