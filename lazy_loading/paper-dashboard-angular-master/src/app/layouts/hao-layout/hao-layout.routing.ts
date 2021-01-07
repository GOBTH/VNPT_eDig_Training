import { Routes } from '@angular/router';

import { ListComponent } from '../../pages/list/list.component';
import { EditComponent } from '../../pages/list/edit/edit.component';
import { AuthGuard } from './auth/auth.guard';


export const HaoLayoutRoutes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'employee',
        children: [
          {
            path: 'edit',
            children: [
              {
                path: ':id',
                canActivateChild: [AuthGuard],
                component: EditComponent
              }
            ]
          }
          ,
          {
            path: 'add',
            children: [
              {
                path: ':id',
                component: EditComponent
              }
            ]
          }
        ]
      }
    ]
  },

];
