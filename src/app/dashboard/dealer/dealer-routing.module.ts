import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';

const routes: Routes = [
  { path: 'lista-de-dealers', component: DealerListComponent },
  { path: 'lista-de-solicitudes', component: RequestListComponent },
  { path: 'agregar-dealer', component: AddDealerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
