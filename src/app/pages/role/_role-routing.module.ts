import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RoleComponent } from '../role/_role.component';

import { GrantRoleComponent } from './grant/_grant-role.component';

const routes: Routes = [
  {
    path: '',
    component: RoleComponent,
    children: [
      {
        path: '',
        redirectTo: 'grant',
        pathMatch: 'full',
      },
      {
        path: 'grant',
        component: GrantRoleComponent
      }
    ],
  },
];



@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}
