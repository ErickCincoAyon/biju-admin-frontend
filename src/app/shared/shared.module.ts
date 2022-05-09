import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    InputComponent,
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
  ],
  exports: [
    InputComponent,
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
