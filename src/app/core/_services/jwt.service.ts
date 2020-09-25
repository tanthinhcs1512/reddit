import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {
  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  getUserId(): String {
    return window.localStorage['UserId'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  saveUserId(userId: String) {
    window.localStorage['UserId'] = userId;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('UserId');
  }
}
