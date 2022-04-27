import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { MainMenuModule } from './main-menu/main-menu.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // TODO: Dashboard modules
    MainMenuModule,
    SharedModule,
  ]
})
export class DashboardModule { }
