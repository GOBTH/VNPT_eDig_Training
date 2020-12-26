import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './page/employees/employees.component';
import { EditComponent } from './page/employees/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: 'employee/add/:id',
    component: EditComponent
  },
  {
    path: 'employee/edit/:id',
    component: EditComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
