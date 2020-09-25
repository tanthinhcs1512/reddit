import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;
  ngOnInit() {
    console.log('hello');
    this.isAuthenticated = false;
  }

  countChangedHandler(isLogin: boolean) {
    console.log(isLogin);
    this.isAuthenticated = isLogin;
    console.log(this.isAuthenticated + 'sdsdsdsd');
  }
}
