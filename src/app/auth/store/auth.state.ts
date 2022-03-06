import { User } from '../../models/user.model';
import { GeneralModel } from '../../models/general.model';
import { MessageModel } from 'src/app/models/message.model';
import { ErrorModel } from '../../models/error.model';
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
 