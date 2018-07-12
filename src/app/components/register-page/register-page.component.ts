import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public email:string;
  public password:string;
  constructor(
    public authServices: AuthService,
    public router: Router) { 
   
  }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authServices.registerUser(this.email,this.password)
    .then((res)=>{
     this.router.navigate(['/admin']);
    }).catch( (err) =>{
      console.log("Error");
      
    });
  }
}
