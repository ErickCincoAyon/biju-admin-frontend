import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectAccessToken } from '../../auth/store/selectors/auth.selector';
import { AuthState } from 'src/app/auth/store/auth.state';
import { getAdmin, renewAccessToken } from '../../auth/store/actions/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor( 
        private readonly _store: Store<AuthState>,
        private readonly _router: Router,
    ) { }

  canActivate() {
    // return this.authService.isAuth();
    return true;
  }


  canLoad(): boolean {

    let access_token = localStorage.getItem('access_token')!;

    if ( access_token ) {

      this._store.dispatch( renewAccessToken({ token: access_token }));
      access_token = localStorage.getItem('access_token')!;

      this._store.dispatch( getAdmin({ token: access_token }));

      return true;

    } else {

      this._router.navigate(['/auth/iniciar-sesion'])
      return false;

    }     

  }


}
