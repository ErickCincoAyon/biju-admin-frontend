import { ErrorModel } from '../../shared/models/error.model';
import { AdminModel } from '../models/admin.model';

export const authFeatureName = 'AUTH';

export interface AuthState {
    admin?: AdminModel; 
    access_token?: string;
    message?: string;
    error?: ErrorModel;
}

export const initialAuthState: AuthState = {
    admin: undefined,
    access_token: undefined,
    message: undefined,
    error: undefined,
}
 