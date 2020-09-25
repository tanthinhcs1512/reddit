import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../_models';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get('/user/' + this.jwtService.getUserId).subscribe(
        (data) => {
          this.setAuth(data.user);
        },
        (err) => this.purgeAuth()
      );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  setToken(token: String, useId: String) {
    this.jwtService.saveToken(token);
    this.jwtService.saveUserId(useId);
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  get currentUser(): User {
    return this.currentUserSubject.value;
  }
}
