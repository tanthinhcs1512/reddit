import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './_role.component';
import { RoleRoutingModule } from './_role-routing.module';
import { GrantRoleComponent } from './grant/_grant-role.component';
import { HeaderContentComponent } from '../../components/header-content/_header-content.component';
import { TableCustomComponent } from '../../components/table/_table-custom.component';
import { CompleterService } from '@akveo/ng2-completer';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [RoleRoutingModule, CommonModule, Ng2SmartTableModule],
  declarations: [
    RoleComponent,
    GrantRoleComponent,
    HeaderContentComponent,
    TableCustomComponent,
  ],
})
export class RoleModule {}
