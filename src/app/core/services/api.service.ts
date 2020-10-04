import { Injectable } from '@angular/core'
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HttpService } from './http.service'
import { UrlService } from './url.service'
import { TokenService } from './token.service'
import { User } from '../models/user.model'
import { Screen } from '../models/screen.model'
import { ScreenSub } from '../models/screensub.model'
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
}) 
export class ApiService {
  
  constructor(
    private http: HttpService, 
    private urls: UrlService,
    private tokenService: TokenService) { }


  login(data: any): Observable<User> {
    const url = this.urls.getLoginUrl();
    return this.http.post(url, data).
      pipe(map(response => response.user));
  }

  signUp(user: any): Observable<User> {
    const url = this.urls.getUsersUrl();
    return this.http.post(url, user).
      pipe(map(response => response.user));
  }

  getCurrentUser(): Observable<User> {
    const url = this.urls.getCurrentUserUrl();
    return this.http.get(url, null, this.tokenService.getToken()).
      pipe(map(response => response.user));
  }

  updateUser(user: User): Observable<User> {
    const url = this.urls.getCurrentUserUrl();
    return this.http.put(url, { user }, this.tokenService.getToken()).
      pipe(map(response => response.user));
  }

  getRoutes(): Observable<Screen[]> {
    const url = this.urls.getRoutesUrl();
    return this.http.get(url, null, this.tokenService.getToken()).
      pipe(map(response => response));
  }

  getRoutesSubUrl(nameScreen: string): Observable<ScreenSub> {
    const url = this.urls.getRoutesSubUrl(nameScreen);
    return this.http.get(url, null, this.tokenService.getToken()).
      pipe(map(response => response));
  }
}
