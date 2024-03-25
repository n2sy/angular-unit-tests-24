import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public userSer: UserService) {}

  // ngOnChanges() {
  //   this.isLogged = this.userSer.isLogged;
  //   this.user = this.userSer.user;
  // }

  // signin() {
  //   this.userSer.login();
  //   console.log(this.userSer.isLogged);
  // }
}
