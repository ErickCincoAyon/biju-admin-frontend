import { QueryModel } from '../../../shared/models/query.model';

export interface VehiclemodelQueryParams extends QueryModel {
    name?: string;
    brand?: string;
    model?: string;
    generation?: string;
    engine?: string;
    active?: boolean;
}