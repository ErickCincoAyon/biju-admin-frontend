import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/auth/store/auth.state';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanLoad {

    constructor( 
        private readonly _authService: AuthService,
        private readonly _store: Store<AuthState>,
        private readonly _router: Router,
    ) { }

  canActivate() {
    // return this.authService.isAuth();
    return true;
  }


  canLoad(): Observable<boolean> {
    return this._store.select( 'access_token' ).pipe(
        take(1),
        map(( access_token ) => {
            if ( access_token ) {
              return false;
            } else {
              this._router.navigate(['/']);
              return true;
            }
        })
    );
  }


}
