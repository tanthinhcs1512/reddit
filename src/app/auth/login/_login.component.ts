import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'


import { AuthService } from '../../core/services';

@Component({
  selector: 'app-layout-login',
  templateUrl: './_login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthService,
    public http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  email1: string;
  password1: string;
  redirectUrl: string;
  error: string[] = []


  @Input() isLogin: boolean;
  @Output() isLoginStatus: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.redirectUrl = params['return']);
  }

  signIn() {
    this.email1 = "thinhtt4@fpt";
    this.password1 = "12345678";
    this.authenticationService.logIn(this.email1, this.password1).subscribe(
      data => this.router.navigateByUrl('/auth/register'),
      httpError => { 
        const apiErrorObject = httpError.error.errors;
      }
    );
  }
}
