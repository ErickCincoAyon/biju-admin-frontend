import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        // path: '',
        // component: MainComponent,
        // children: [
        //     { path: 'iniciar-sesion', component: SignInComponent },
        //     { path: 'enviar-codigo', component: SendCodeComponent },
        //     { path: 'recuperar-cuenta', component: RecoverComponent },
        //     { path: '**', redirectTo: 'iniciar-sesion' },
        // ]
        path: '', component: DashboardComponent
    },
    
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
})
export class DashboardRoutingModule { }