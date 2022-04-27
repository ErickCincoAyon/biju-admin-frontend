import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
    {   
        path: '', 
        component: DashboardComponent,
        children: [
            { path: '', loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuModule ) },
        ]
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