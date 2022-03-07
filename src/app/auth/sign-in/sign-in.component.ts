import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../store/auth.state';
import { signIn, resetAuthError, resetMessage } from '../store/actions/auth.action';
import { selectError, selectMessage } from '../store/selectors/auth.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  public componentDestroyed$ = new Subject();
  public loginForm = this._fb.group({
    email: ['', [ Validators.required, Validators.email, Validators.maxLength(40) ] ],
    password: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(40) ]],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _toastrService: ToastrService,
    private readonly _router: Router,
    private readonly _store: Store<AuthState>,
  ) { }

  ngOnInit(): void {
    
    /** Select the code message to redirect to send code and reset the state of code */
    this._store.pipe( takeUntil( this.componentDestroyed$ ),select( selectMessage )).subscribe(( value ) => {
      
      if ( value ) {
        this._toastrService.success( value );
        this._router.navigate(['/auth/enviar-codigo']);
        this._store.dispatch( resetMessage() );
      }

    });

    /** Select the error if this happens */
    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectError )).subscribe(( value ) => {
      
      if ( value && value?.path?.split('/').pop() !== 'profile' ) {
        this._toastrService.info( value?.error?.message );
        this._store.dispatch( resetAuthError() );
      }

    });
    
  }

  public login() {

    this._store.dispatch( signIn({ credentials: this.loginForm.getRawValue() }) );
    
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(1);
  }
}
