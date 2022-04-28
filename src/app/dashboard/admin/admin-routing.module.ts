import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';

const routes: Routes = [
  { path: 'lista-de-administradores', component: AdminListComponent },
  { path: 'agregar-administrador', component: AddAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
