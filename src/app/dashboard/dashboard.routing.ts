import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
    {   
        path: '', 
        component: DashboardComponent,
        children: [
            { path: '', loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuModule ) },
            { path: 'catalogos', loadChildren: () => import('./catalog/catalog.module').then( m => m.CatalogModule ) },
            { path: 'modelos-de-vehiculo', loadChildren: () => import('./vehicle-model/vehicle-model.module').then( m => m.VehicleModelModule )},
            { path: 'vehiculos', loadChildren: () => import('./vehicle/vehicle.module').then( m => m.VehicleModule ) },
            { path: 'dealers', loadChildren: () => import('./dealer/dealer.module').then( m => m.DealerModule ) },
            { path: 'usuarios', loadChildren: () => import('./user/user.module').then( m => m.UserModule ) },
            { path: 'administradores', loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ) },
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