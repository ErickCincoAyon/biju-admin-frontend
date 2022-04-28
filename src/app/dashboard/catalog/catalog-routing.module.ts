import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { AddCatalogComponent } from './add-catalog/add-catalog.component';

const routes: Routes = [
  { path: 'lista-de-catalogos', component: CatalogListComponent },
  { path: 'agregar-catalogo', component: AddCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
