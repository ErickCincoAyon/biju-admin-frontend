import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/auth.reducer';
import { authFeatureName } from './store/auth.state';

import { AuthRoutingModule } from './auth.routing';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { RecoverComponent } from './recover/recover.component';
import { SendCodeComponent } from './send-code/send-code.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effect';
import { NewPasswordComponent } from './new-password/new-password.component';

@NgModule({
  declarations: [
    SignInComponent,
    AuthComponent,
    RecoverComponent,
    SendCodeComponent,
    NewPasswordComponent,
  ],
  exports: [
    SignInComponent,
    AuthComponent,
    RecoverComponent,
    SendCodeComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature( authFeatureName, authReducer ),
    EffectsModule.forFeature([ AuthEffects ]),
    SharedModule,
  ]
})
export class AuthModule { }
