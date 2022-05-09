import { Action, createReducer, on } from '@ngrx/store';
import { initialVehiclemodelState, VehiclemodelState } from '../vehiclemodel.state';
import * as actions from '../actions/vehiclemodel.action';

const _vehiclemodelReducer = createReducer(
    initialVehiclemodelState,
    on( actions.createVehiclemodel, state => ({ ...state })),
    on( actions.successCreateVehiclemodel, ( state, { res }) => ({ ...state, vehiclemodel: res })),

    on( actions.vehiclemodelFindAll, state => ({ ...state })),
    on( actions.successVehiclemodelFindAll, ( state, { res }) => ({ ...state, vehiclemodels: res })),

    on( actions.vehiclemodelFindOne, state => ({ ...state })),
    on( actions.successVehiclemodelFindOne, ( state, { res }) => ({ ...state, vehiclemodel: res })),

    on( actions.vehiclemodelUpdate, state => ({ ...state })),
    on( actions.successVehiclemodelUpdate, ( state, { res }) => ({ ...state, vehiclemodel: res })),

    on( actions.vehiclemodelToggleActive, state => ({ ...state })),
    on( actions.successVehiclemodelToggleActive, ( state, { res }) => ({ ...state, vehiclemodel: res })),

    on( actions.vehiclemodelDelete, state => ({ ...state })),
    on( actions.successVehiclemodelDelete, ( state, { res }) => ({ ...state, vehiclemodel: res })),

    on( actions.vehiclemodelError, ( state, { res }) => ({ ...state, error: res.error })),
    on( actions.resetVehiclemodelError, ( state ) => ({ ...state, error: undefined })),
);

export function vehiclemodelReducer( state: VehiclemodelState | undefined, action: Action ) {
    return _vehiclemodelReducer(state, action);
}