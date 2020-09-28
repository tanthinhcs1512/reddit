import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../../core/services';

@Component({
  selector: 'app-layout-login',
  templateUrl: './_login.component.html',
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authenticationService: UserService, public http: HttpClient) {}
  @Input() isLogin: boolean;

  @Output() isLoginStatus: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {}

  isLoginForm() {
    // this.isLogin = true;
    // console.log(this.isLogin);
    // this.isLoginStatus.emit(this.isLogin);
    this.email = 'thinh';
    this.password = '1234578';
    console.log(this.email);
    this.authenticationService.checkAuth();
    // this.http.get('https://example.com/api/things')
    //   .subscribe(
    //     data => console.log(data),
    //     err => console.log(err)
    //   );
  }
}
