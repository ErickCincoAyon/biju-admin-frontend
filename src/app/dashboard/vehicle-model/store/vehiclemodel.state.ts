import { ErrorModel } from '../../../shared/models/error.model';
import { VehiclemodelModel } from '../models/vehiclemodel.model';
import { GeneralModel } from '../../../shared/models/general.model';
import { PaginateModel } from '../../../shared/models/paginate.model';


export const vehicleModelFeatureName = 'VEHICLE_MODEL';

export interface VehiclemodelState {
    vehiclemodel?: GeneralModel<VehiclemodelModel>;
    vehiclemodels?: PaginateModel<VehiclemodelModel[]>;
    error?: ErrorModel;
}

export const initialVehiclemodelState: VehiclemodelState = {
    vehiclemodel: undefined,
    vehiclemodels: undefined,
    error: undefined,
}
 