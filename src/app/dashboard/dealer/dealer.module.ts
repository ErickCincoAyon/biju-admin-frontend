import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerRoutingModule } from './dealer-routing.module';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';


@NgModule({
  declarations: [
    DealerListComponent,
    RequestListComponent,
    AddDealerComponent
  ],
  imports: [
    CommonModule,
    DealerRoutingModule
  ]
})
export class DealerModule { }
