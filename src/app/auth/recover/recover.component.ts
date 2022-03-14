import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../store/auth.state';
import { Router } from '@angular/router';
import { recover, resetAuthError, resetMessage } from '../store/actions/auth.action';
import { takeUntil, Subject } from 'rxjs';
import { selectError, selectMessage } from '../store/selectors/auth.selector';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

const appUrl = environment.appUrl;

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss']
})
export class RecoverComponent implements OnInit, OnDestroy {

  public componentDestroyed$ = new Subject();
  public recoverForm = this._fb.group({
    email: ['', [ Validators.required, Validators.email, Validators.maxLength(40) ] ],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _store: Store<AuthState>,
    private readonly _router: Router,
    private readonly _toastrService: ToastrService,
  ) { }

  ngOnInit(): void {

    /** Select the code message to redirect to send code and reset the state of code */
    this._store.pipe( takeUntil( this.componentDestroyed$ ),select( selectMessage )).subscribe(( value ) => {
      
      if ( value ) {
        this._toastrService.success( value );
        this._router.navigate(['/auth/iniciar-sesion']);
        this._store.dispatch( resetMessage() );
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

  recover() {
    
    if ( this.recoverForm.valid ) {
      this._store.dispatch( recover({ email: this.recoverForm.controls['email'].value, appUrl: `${ appUrl }/auth/nueva-contraseña` }));
    }
    
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(1);
  }

}
