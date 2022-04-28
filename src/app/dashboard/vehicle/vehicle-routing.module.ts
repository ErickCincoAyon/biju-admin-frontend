import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: 'lista-de-vehiculos', component: VehicleListComponent },
  { path: 'lista-de-vehiculos-inactivos', component: VehicleListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
