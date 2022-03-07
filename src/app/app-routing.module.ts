import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from './shared/strategies/auth-preload-strategy';
import { AuthGuard } from './shared/guards/auth.guard';
import { NoAuthGuard } from './shared/guards/no-auth.guard';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canActivate: [ NoAuthGuard ]
  },
  { 
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
    canActivate: [ AuthGuard ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
