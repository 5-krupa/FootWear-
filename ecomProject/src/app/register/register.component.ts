import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private api:ApiService, private router:Router){}
userForm = new FormGroup({
  'user_name': new FormControl(''),
  'user_mobile':new FormControl(''),
  'user_email':new FormControl(''),
  'user_password':new FormControl('')
});
registerUser(){
  return this.api.registerUser(this.userForm.value).subscribe((res:any)=>{
    if(res.status=='success'){
      alert("you have registered successfully");
      this.router.navigate(["/login"]);
    }
    else{
      alert("invalid Details");
    }
  });
}
}
