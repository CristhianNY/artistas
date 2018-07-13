import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
public isLogin: boolean;
public userName: string;
public emailUser: string;

  constructor(
    public authervice: AuthService
  ) { }

  ngOnInit() {
    this.authervice.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogin = true;
        this.userName = auth.displayName;
        this.emailUser = auth.email;
      }else{
        this.isLogin =false;
      }
    });
  }

logOut(){
    this.authervice.logout();
  }
}
