import { Action, createReducer, on } from '@ngrx/store';
import { initialAuthState, AuthState } from '../auth.state';
import * as actions from '../actions/auth.action';

const _authReducer = createReducer(
    initialAuthState,
    on( actions.signIn, state => ({ ...state })),
    on( actions.successSignIn, ( state, { res }) => ({ ...state, message: res.data?.message })),
    on( actions.resetMessage, state => ({ ...state, message: undefined })),

    on( actions.sendCode, state => ({ ...state })),
    on( actions.successSendCode, ( state, { res }) => ({ ...state, access_token: res.data?.access_token })),

    on( actions.recover, state => ({ ...state })),
    on( actions.successRecover, ( state, { res }) => ({ ...state, message: res.data?.message })),

    on( actions.getAdmin, state => ({ ...state })),
    on( actions.successGetAdmin, ( state, { res }) => ({ ...state, admin: res.data })),

    on( actions.renewAccessToken, state => ({ ...state })),
    on( actions.successRenewAccessToken, ( state, { res }) => ({ ...state, access_token: res.data?.access_token })),

    on( actions.authError, ( state, { res }) => ({ ...state, error: res.error })),
    on( actions.resetAuthError, ( state ) => ({ ...state, error: undefined })),
);

export function authReducer( state: AuthState | undefined, action: Action ) {
    return _authReducer(state, action);
}