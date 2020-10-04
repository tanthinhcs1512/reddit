import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component'

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'role',
      loadChildren: () => import('./role/_role.module').then(m => m.RoleModule)
    },
    {
      path: '',
      redirectTo: 'role',
      pathMatch: 'full',
    },
  ]
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
