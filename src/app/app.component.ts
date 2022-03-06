import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from './auth/store/auth.state';
import { selectAccessToken, selectError, selectAdmin } from './auth/store/selectors/auth.selector';
import { resetAuthError } from './auth/store/actions/auth.action';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly _store: Store<AuthState>,
    private readonly _toastrService: ToastrService,
    private readonly _router: Router,
  ) {}

  ngOnInit(): void {

    /** Select the error if this happens */
    this._store.pipe( select( selectError )).subscribe(( value ) => {

      if ( value && value.path?.split('/').pop() === 'renew-access-token' ) {
        this._toastrService.info('La sesión ha expirado, vuelve a iniciar sesión !');
        localStorage.removeItem('access_token');
        this._store.dispatch( resetAuthError() );
        this._router.navigate(['/auth/iniciar-sesion']);
      }

    });

  }

}
