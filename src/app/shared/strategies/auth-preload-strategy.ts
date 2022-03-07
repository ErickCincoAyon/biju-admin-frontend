import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Observable, of, tap } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { AuthState } from "src/app/auth/store/auth.state";
import { getAdmin } from '../../auth/store/actions/auth.action';

@Injectable({
    providedIn: 'root'
})
export class AuthPreloadStrategy implements PreloadingStrategy {

    constructor( 
        private readonly _authService: AuthService,
        private readonly _router: Router,
        private readonly _store: Store<AuthState>,
    ) {}

    preload( route: Route, fn: () => Observable<any> ): Observable<any> {
        return this._authService.isAuth().pipe(
            tap( isAuth => {
                if ( this._router.url.split('/')[1] === 'auth' ) {

                    if ( isAuth ) {

                        this._store.dispatch( getAdmin({ token: localStorage.getItem('access_token')! }));
                        this._router.navigate(['/']);
                            
                    }

                } else {

                    ( !isAuth ) ? this._router.navigate(['/auth/iniciar-sesion']) : 
                    this._store.dispatch( getAdmin({ token: localStorage.getItem('access_token')! }));

                }
            }),
            switchMap(( isAuth ) => {
                if ( isAuth ) {
                    return fn()
                } else {
                        return of(null)
                }
            }),
        );
    }
}