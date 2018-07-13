import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

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
    public router: Router,
    public flashMessage: FlashMessagesService) { 
   
  }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authServices.registerUser(this.email,this.password)
    .then((res)=>{
      this.flashMessage.show('Usuario Creado Correctamente',
      {cssClass: 'alert-success', timeout:4000});
     this.router.navigate(['/admin']);
    }).catch( (err) =>{
      this.flashMessage.show("No se puede registrar este Correo",
      {cssClass: 'alert-danger', timeout:4000});
      
    });
  }
}
