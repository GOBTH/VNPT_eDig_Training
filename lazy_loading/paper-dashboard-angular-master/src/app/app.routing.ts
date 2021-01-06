import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HaoLayoutComponent } from './layouts/hao-layout/hao-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  } ,

  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: HaoLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/hao-layout/hao-layout.module#HaoLayoutModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    //pathMatch: 'full'
  }
]
