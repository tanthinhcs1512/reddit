import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NbEvaIconsModule } from '@nebular/eva-icons';

//////////////////////CONTENT
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

/////////////////////COMPONENT

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
