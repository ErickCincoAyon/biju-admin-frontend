import { createAction, props } from '@ngrx/store';
import { VehiclemodelModel } from '../../models/vehiclemodel.model';
import { GeneralModel } from '../../../../shared/models/general.model';
import { PaginateModel } from 'src/app/shared/models/paginate.model';
import { VehiclemodelQueryParams } from '../../models/vehiclemodel.queryParams';

export enum VehiclemodelActionTypes {
    VEHICLEMODEL_CREATE = '[Vehiclemodel] Create',
    VEHICLEMODEL_CREATE_SUCCESS = '[Vehiclemodel] Success create',

    VEHICLEMODEL_FIND_ALL = '[Vehiclemodel] Find all',
    VEHICLEMODEL_FIND_ALL_SUCCESS = '[Vehiclemodel] Success find all',

    VEHICLEMODEL_FIND_ONE = '[Vehiclemodel] Find one',
    VEHICLEMODEL_FIND_ONE_SUCCESS = '[Vehiclemodel] Success find one',

    VEHICLEMODEL_UPDATE = '[Vehiclemodel] Update',
    VEHICLEMODEL_UPDATE_SUCCESS = '[Vehiclemodel] Success update',

    VEHICLEMODEL_TOGGLE_ACTIVE = '[Vehiclemodel] Toggle active',
    VEHICLEMODEL_TOGGLE_ACTIVE_SUCCESS = '[Vehiclemodel] Success toggle active',

    VEHICLEMODEL_DELETE = '[Vehiclemodel] Delete',
    VEHICLEMODEL_DELETE_SUCCESS = '[Vehiclemodel] Delete update',

    VEHICLEMODEL_ERROR = '[Vehiclemodel] Error',
    VEHICLEMODEL_RESET_ERROR = '[Vehiclemodel] Reset error',
} 

export const createVehiclemodel = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_CREATE,
    props<{ vehiclemodel: VehiclemodelModel }>()
);
export const successCreateVehiclemodel = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_CREATE_SUCCESS,
    props<{ res: GeneralModel<VehiclemodelModel> }>()
);

// ---------------------------------------------- //
// ---------------------------------------------- //

export const vehiclemodelFindAll = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_FIND_ALL,
    props<{ queryParams: VehiclemodelQueryParams }>()
);
export const successVehiclemodelFindAll = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_FIND_ALL_SUCCESS,
    props<{ res: PaginateModel<VehiclemodelModel[]> }>()
);

// ---------------------------------------------- //
// ---------------------------------------------- //

export const vehiclemodelFindOne = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_FIND_ONE,
    props<{ id: string }>()
);
export const successVehiclemodelFindOne = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_FIND_ONE_SUCCESS,
    props<{ res: GeneralModel<VehiclemodelModel> }>()
);

// ---------------------------------------------- //
// ---------------------------------------------- //

export const vehiclemodelUpdate = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_UPDATE,
    props<{ id: string, vehiclemodel: VehiclemodelModel }>()
);
export const successVehiclemodelUpdate = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_UPDATE_SUCCESS,
    props<{ res: GeneralModel<VehiclemodelModel> }>()
);

// ---------------------------------------------- //
// ---------------------------------------------- //

export const vehiclemodelToggleActive = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_TOGGLE_ACTIVE,
    props<{ id: string }>()
);
export const successVehiclemodelToggleActive = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_TOGGLE_ACTIVE_SUCCESS,
    props<{ res: GeneralModel<VehiclemodelModel> }>()
);

// ---------------------------------------------- //
// ---------------------------------------------- //

export const vehiclemodelDelete = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_DELETE,
    props<{ id: string }>()
);
export const successVehiclemodelDelete = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_DELETE_SUCCESS,
    props<{ res: GeneralModel<VehiclemodelModel> }>()
);

// ---------------------------------------------- //
// ---------------------------------------------- //

export const vehiclemodelError = createAction(
    VehiclemodelActionTypes.VEHICLEMODEL_ERROR,
    props<{ res: GeneralModel<{}> }>()
);
export const resetVehiclemodelError = createAction( VehiclemodelActionTypes.VEHICLEMODEL_RESET_ERROR );