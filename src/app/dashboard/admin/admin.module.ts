import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';


@NgModule({
  declarations: [
    AdminListComponent,
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
