import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleModelListComponent } from './vehicle-model-list/vehicle-model-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { AddVehicleModelComponent } from './add-vehicle-model/add-vehicle-model.component';

const routes: Routes = [
  { path: 'lista-de-modelos-de-vehiculo', component: VehicleModelListComponent },
  { path: 'lista-de-marcas', component: BrandListComponent },
  { path: 'agregar-modelo-de-vehiculo', component: AddVehicleModelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleModelRoutingModule { }
