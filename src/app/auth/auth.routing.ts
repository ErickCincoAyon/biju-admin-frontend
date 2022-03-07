import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from './auth.component';
import { RecoverComponent } from './recover/recover.component';
import { SendCodeComponent } from './send-code/send-code.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'iniciar-sesion', component: SignInComponent },
            { path: 'enviar-codigo', component: SendCodeComponent },
            { path: 'recuperar-cuenta', component: RecoverComponent },
            { path: '**', redirectTo: 'iniciar-sesion' },
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }