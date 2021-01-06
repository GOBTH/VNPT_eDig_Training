import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HaoLayoutRoutes } from './hao-layout.routing';

import { ListComponent } from '../../pages/list/list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(HaoLayoutRoutes),
      FormsModule,
      NgbModule
    ],
    declarations: [
      ListComponent
    ]
})


export class HaoLayoutModule {}
