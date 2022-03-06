import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from '../../services/auth.service';
import { successSignIn, AuthActionTypes, sendCode, successSendCode, authError, successGetAdmin, successRecover, successRenewAccessToken } from '../actions/auth.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly _authService: AuthService,
    ) {}

    signIn$ = createEffect(() => 
        this.actions$.pipe(
            ofType( AuthActionTypes.AUTH_SIGN_IN ),
            map(( action: any ) => action.credentials ),
            switchMap(( action ) => 
                this._authService.signin( action ).pipe(
                    map((value) => {
                        return successSignIn({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( authError({ res: error }))
                    })
                )
            )
        )
    );

    sendCodeToGetAccessToken$ = createEffect(() => 
        this.actions$.pipe(
            ofType( AuthActionTypes.AUTH_SEND_CODE ),
            map(( action: any ) => action.codeToSend ),
            switchMap(( action ) => 
                this._authService.sendCode( action ).pipe(
                    map((value) => {
                        return successSendCode({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( authError({ res: error }))
                    })
                )
            )
        )
    );

    recover$ = createEffect(() => 
        this.actions$.pipe(
            ofType( AuthActionTypes.AUTH_RECOVER ),
            map(( action: any ) => action.email ),
            switchMap(( action ) => 
                this._authService.recover( action ).pipe(
                    map((value) => {
                        return successRecover({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( authError({ res: error }))
                    })
                )
            )
        )
    );

    getAdmin$ = createEffect(() =>
        this.actions$.pipe(
            ofType( AuthActionTypes.AUTH_GET_ADMIN ),
            map(( action: any ) => action.token ),
            switchMap(( action ) => 
                this._authService.myProfile( action ).pipe(
                    map((value) => {
                        return successGetAdmin({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( authError({ res: error }))
                    })
                )
            )
        )       
    );

    renewAccessToken$ = createEffect(() =>
        this.actions$.pipe(
            ofType( AuthActionTypes.AUTH_RENEW_ACCESS_TOKEN ),
            map(( action: any ) => action.token ),
            switchMap(( action ) => 
                this._authService.renewAccessToken( action ).pipe(
                    map((value) => {
                        return successRenewAccessToken({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( authError({ res: error }))
                    })
                )
            )
        )       
    );

}