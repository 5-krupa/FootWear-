import { Component } from '@angular/core';
import {  FormGroup, FormControl} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:any = new FormGroup({
    'user_mobile':new FormControl(''),
    'user_password':new FormControl('')
  });
  constructor(private api:ApiService, private router:Router){}
  loginUser(){
    this.api.loginUser(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res.status=='success'){
        localStorage.setItem('token',res.token);
        this.router.navigate(['/']);
      }
      else{
        alert("invalid");
      }
    });
  }
}
