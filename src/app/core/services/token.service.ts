import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  readonly TOKEN_KEY: string = 'TOKEN';

  constructor() { }

  getToken(): string {     
    return window.localStorage.getItem(this.TOKEN_KEY);   
  }

  setToken(token: string): void {       
      window.localStorage.setItem(this.TOKEN_KEY, token); 
  }

  removeToken(): void {        
    window.localStorage.removeItem(this.TOKEN_KEY);
  }

  tokenExists(): boolean {        
    return !!this.getToken()        
  }
}
