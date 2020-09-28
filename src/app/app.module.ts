import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

////////////////////LAYOUT
import { HeaderComponent } from './shared';
import { NavigationComponent } from './shared';

//////////////////////CONTENT
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
