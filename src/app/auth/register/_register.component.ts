import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-layout-register',
  templateUrl: './_register.component.html',
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  constructor(public http: HttpClient) {}
  @Input() isLogin: boolean;

  @Output() isLoginStatus: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {}

  isLoginForm() {
  }
}
