import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthState } from '../../auth/store/auth.state';
import { getAdmin } from '../../auth/store/actions/auth.action';
import { map, take, delay } from 'rxjs';
import { selectAdmin } from '../../auth/store/selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private readonly _store: Store<AuthState>,
  ) {}

  canActivate() {

    let access_token: string = this._authService.getAccessToken();
    if ( access_token ) {

      this._store.pipe( select( selectAdmin ), take(1) ).subscribe(( value ) => {
        ( !value ) && this._store.dispatch( getAdmin({ token: access_token }));
      });
      
      return true;

    } else {

      this._router.navigate(['/auth/iniciar-sesion']);
      return false;

    }
  }
}
