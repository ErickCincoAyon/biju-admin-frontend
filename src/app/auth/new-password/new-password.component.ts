import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../store/auth.state';
import { selectAccessToken, selectAdmin, selectError } from '../store/selectors/auth.selector';
import { getAdmin, resetAuthError, newPassword } from '../store/actions/auth.action';
import { NewPasswordModel } from '../models/new-password.model';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss']
})
export class NewPasswordComponent implements OnInit {

  public componentDestroyed$ = new Subject();
  public passwordForm = this._fb.group({
    password: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(70) ]],
    passwordRepeat: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(70) ]],
    token: ['', [ Validators.required ]],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _toastrService: ToastrService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<AuthState>,
  ) {
    this._route.params.subscribe(( value ) => {
      this.passwordForm.controls['token'].setValue( value?.['token'] );
    })
  }

  ngOnInit(): void {

    /** Select the access_token */
    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectAccessToken )).subscribe(( value ) => {

      ( value ) && this._store.dispatch( getAdmin({ token: value }));

    });
    
    /** Select the admin Data */
    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectAdmin )).subscribe(( value ) => {

      if ( value ) {
        this._toastrService.success(`Bienvenid@ ${ value.name }`, 'Contraseña actualizada !');
        this._router.navigate(['/']);
      }

    });

    /** Select the error if this happens */
    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectError )).subscribe(( value ) => {

      if ( value && value.error ) {
        this._toastrService.info( value?.error?.message );
        this._store.dispatch( resetAuthError() );
      }

    });

  }

  sendNewPassword() {
    let newPasswordToSend: NewPasswordModel = this.passwordForm.getRawValue();
    ( this.passwordForm.valid ) && this._store.dispatch( newPassword({ form: newPasswordToSend }));
  }

  verifyPasswordRepeat( field: string, fieldTwo: string ) {
      
    if( this.passwordForm.get( field )?.value !== this.passwordForm.get( fieldTwo )?.value ) {

      this.passwordForm.controls[ field ]?.setErrors({'incorrect': true});
      this.passwordForm.controls[ fieldTwo ]?.setErrors({'incorrect': true});

    } else {

      this.passwordForm.controls[ field ]?.setErrors(null);
      this.passwordForm.controls[ fieldTwo ]?.setErrors(null);

    }   

  }

  ngOnDestroy() {
    this.componentDestroyed$.next(1);
  }
}
