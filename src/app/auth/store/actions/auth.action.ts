import { createAction, props } from '@ngrx/store';
import { LoginModel } from '../../models/login.model';
import { GeneralModel } from '../../../models/general.model';
import { MessageModel } from '../../../models/message.model';
import { CodeToLoginModel } from '../../models/code-to-login.model';
import { AdminModel } from '../../models/admin.model';
import { NewPasswordModel } from '../../models/new-password.model';

export enum AuthActionTypes {
    AUTH_SIGN_IN = '[Auth] Sign in',
    AUTH_SIGN_IN_SUCCESS = '[Auth] Success sign in',
    AUTH_RESET_MESSAGE = '[Auth] Reset message',

    AUTH_SEND_CODE = '[Auth] Send code',
    AUTH_SEND_CODE_SUCCESS = '[Auth] Success send code',

    AUTH_RECOVER = '[Auth] Recover',
    AUTH_RECOVER_SUCCESS = '[Auth] Success recover',

    AUTH_NEW_PASSWORD = '[Auth] New Password',
    AUTH_NEW_PASSWORD_SUCCESS = '[Auth] Success new password',

    AUTH_GET_ADMIN = '[Auth] Get admin',
    AUTH_GET_ADMIN_SUCCESS = '[Auth] Sucess get admin',

    AUTH_RENEW_ACCESS_TOKEN = '[Auth] Renew access token',
    AUTH_RENEW_ACCESS_TOKEN_SUCCESS = '[Auth] Success renew access token',

    AUTH_LOGOUT = '[Auth] Logout',

    AUTH_ERROR = '[Auth] Error',
    AUTH_RESET_ERROR = '[Auth] Reset error',
} 

export const signIn = createAction(
    AuthActionTypes.AUTH_SIGN_IN,
    props<{ credentials: LoginModel }>()
);
export const successSignIn = createAction(
    AuthActionTypes.AUTH_SIGN_IN_SUCCESS,
    props<{ res: GeneralModel<MessageModel> }>()
);
export const resetMessage = createAction( AuthActionTypes.AUTH_RESET_MESSAGE);
// -- //
export const sendCode = createAction(
    AuthActionTypes.AUTH_SEND_CODE,
    props<{ codeToSend: CodeToLoginModel }>()
);
export const successSendCode = createAction(
    AuthActionTypes.AUTH_SEND_CODE_SUCCESS,
    props<{ res: GeneralModel<MessageModel> }>()
);
// -- //
export const recover = createAction(
    AuthActionTypes.AUTH_RECOVER,
    props<{ email: string, appUrl: string }>()
);
export const successRecover = createAction(
    AuthActionTypes.AUTH_RECOVER_SUCCESS,
    props<{ res: GeneralModel<MessageModel> }>()
);
// -- //
export const newPassword = createAction(
    AuthActionTypes.AUTH_NEW_PASSWORD,
    props<{ form: NewPasswordModel }>()
);
export const successNewPassword = createAction(
    AuthActionTypes.AUTH_NEW_PASSWORD_SUCCESS,
    props<{ res: GeneralModel<MessageModel> }>()
);
// -- //
export const getAdmin = createAction(
    AuthActionTypes.AUTH_GET_ADMIN,
    props<{ token: string }>()
);
export const successGetAdmin = createAction(
    AuthActionTypes.AUTH_GET_ADMIN_SUCCESS,
    props<{ res: GeneralModel<AdminModel> }>()
);
// -- //
export const renewAccessToken = createAction(
    AuthActionTypes.AUTH_RENEW_ACCESS_TOKEN,
    props<{ token: string }>()
);
export const successRenewAccessToken = createAction(
    AuthActionTypes.AUTH_RENEW_ACCESS_TOKEN_SUCCESS,
    props<{ res: GeneralModel<MessageModel> }>()
);
// -- //
export const logout = createAction(
    AuthActionTypes.AUTH_LOGOUT
);
// -- //
export const authError = createAction(
    AuthActionTypes.AUTH_ERROR,
    props<{ res: GeneralModel<{}> }>()
)
export const resetAuthError = createAction( AuthActionTypes.AUTH_RESET_ERROR );