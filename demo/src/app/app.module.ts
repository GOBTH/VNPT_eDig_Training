import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { EmployeesComponent } from './page/employees/employees.component';
import { EditComponent } from './page/employees/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ConfirmDialogDeleteComponent } from './page/employees/confirm-dialog-delete/confirm-dialog-delete.component';
import { ConfirmDialogDeleteModule } from './page/employees/confirm-dialog-delete/confirm-dialog-delete/confirm-dialog-delete.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogDeleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
