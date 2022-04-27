import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CodeToLoginModel } from '../models/code-to-login.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../store/auth.state';
import { sendCode, resetAuthError, getAdmin } from '../store/actions/auth.action';
import { selectAccessToken, selectAdmin, selectError } from '../store/selectors/auth.selector';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss']
})
export class SendCodeComponent implements OnInit, OnDestroy {

  public componentDestroyed$ = new Subject();
  public codeForm = this._fb.group({
    code: ['', [ Validators.required, Validators.minLength(5), Validators.maxLength(5) ]],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _toastrService: ToastrService,
    private readonly _router: Router,
    private readonly _store: Store<AuthState>,
  ) {}

  ngOnInit(): void {

    /** Select the access_token */
    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectAccessToken )).subscribe(( value ) => {

      /** Send the token to get the admin Data */
      ( value ) && this._store.dispatch( getAdmin({ token: value }));

    });
    
    /** Select the admin Data */
    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectAdmin )).subscribe(( value ) => {

      if ( value ) {
        this._toastrService.success(`Bienvenid@ ${ value.name }`);
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

  sendCode() {
    let codeToSend: CodeToLoginModel = this.codeForm.getRawValue();

    if ( this.codeForm.valid ) {
      this._store.dispatch( sendCode({ codeToSend }) );
    }

  }

  ngOnDestroy() {
    this.componentDestroyed$.next(1);
  }
}
