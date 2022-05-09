import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VehiclemodelState, vehicleModelFeatureName } from '../vehiclemodel.state';

export const getVehiclemodelFeatureState = createFeatureSelector<VehiclemodelState>( vehicleModelFeatureName );

export const selectVehiclemodel = createSelector(
    getVehiclemodelFeatureState,
    (state: VehiclemodelState) => state.vehiclemodel
);

export const selectVehiclemodels = createSelector(
    getVehiclemodelFeatureState,
    (state: VehiclemodelState) => state.vehiclemodels
);

export const selectError = createSelector(
    getVehiclemodelFeatureState,
    (state: VehiclemodelState) => state.error
);