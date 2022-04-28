import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleModelRoutingModule } from './vehicle-model-routing.module';
import { VehicleModelListComponent } from './vehicle-model-list/vehicle-model-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { AddVehicleModelComponent } from './add-vehicle-model/add-vehicle-model.component';


@NgModule({
  declarations: [
    VehicleModelListComponent,
    BrandListComponent,
    AddVehicleModelComponent
  ],
  imports: [
    CommonModule,
    VehicleModelRoutingModule
  ]
})
export class VehicleModelModule { }
