import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

////////////////////LAYOUT
import { HeaderComponent } from '../shared/layout/_header.component';
import { NavigationComponent } from '../shared/layout/_navigation.component';
import { NbIconModule } from '@nebular/theme';
/////////////////////PAGES
import { RoleModule } from './role/_role.module';

@NgModule({
  imports: [PagesRoutingModule, CommonModule, RoleModule, NbIconModule],
  declarations: [PagesComponent, HeaderComponent, NavigationComponent],
})
export class PagesModule {}
