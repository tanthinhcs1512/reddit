import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  // TODO - inject this
  private baseUrl = 'http://localhost:8080';
  private sub = '';

  constructor() {}

  getCurrentUserUrl(): string {
    return `${this.baseUrl}/user`;
  }

  getLoginUrl(): string {
    return `${this.baseUrl}/login`;
  }

  getUsersUrl(): string {
    return `${this.baseUrl}/users`;
  }

  getRoutesUrl(): string {
    return `${this.baseUrl}/routes`;
  }

  getRoutesSubUrl(nameScreen: string): string {
    this.sub = nameScreen;
    return `${this.baseUrl}/${this.sub}`;
  }
}
