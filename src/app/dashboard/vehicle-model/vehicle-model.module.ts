import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleModelRoutingModule } from './vehicle-model-routing.module';
import { VehicleModelListComponent } from './vehicle-model-list/vehicle-model-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { AddVehicleModelComponent } from './add-vehicle-model/add-vehicle-model.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { vehicleModelFeatureName } from './store/vehiclemodel.state';
import { vehiclemodelReducer } from './store/reducers/vehiclemodel.reducer';
import { VehiclemodelEffects } from './store/effects/vehiclemodel.effect';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    VehicleModelListComponent,
    BrandListComponent,
    AddVehicleModelComponent
  ],
  imports: [
    CommonModule,
    VehicleModelRoutingModule,
    SharedModule,
    StoreModule.forFeature( vehicleModelFeatureName, vehiclemodelReducer ),
    EffectsModule.forFeature([ VehiclemodelEffects ]),
  ]
})
export class VehicleModelModule { }
