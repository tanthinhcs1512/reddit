import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './_helpers/auth.interceptor';

import { ApiService, JwtService, UserService } from './_services';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    ApiService,
    JwtService,
    UserService,
  ],
  declarations: [],
})
export class CoreModule {}
