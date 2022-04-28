import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { AddCatalogComponent } from './add-catalog/add-catalog.component';


@NgModule({
  declarations: [
    CatalogListComponent,
    AddCatalogComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
