import { Routes } from '@angular/router';

import { ListComponent } from '../../pages/list/list.component';
import { EditComponent } from '../../pages/list/edit/edit.component';


export const HaoLayoutRoutes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    children:[
      // {
      //   path: 'employee/edit/:id',
      //   component: EditComponent
      // },
      {
        path: 'employee',
        children: [
          {
            path: 'edit',
            children: [
              {
                path: ':id',
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
