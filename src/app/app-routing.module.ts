import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
    canLoad: [ AuthGuard ],
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
