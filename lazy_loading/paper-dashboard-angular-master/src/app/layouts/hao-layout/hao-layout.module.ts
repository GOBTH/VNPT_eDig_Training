import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HaoLayoutRoutes } from './hao-layout.routing';

import { ListComponent } from '../../pages/list/list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { EditingDialogComponent } from '../../pages/list/editing-dialog/editing-dialog.component';
import { DeletingDialogComponent } from '../../pages/list/deleting-dialog/deleting-dialog.component';
import { EditComponent } from '../../pages/list/edit/edit.component';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(HaoLayoutRoutes),
      FormsModule,
      NgbModule,
      MatTableModule,
      MatDialogModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatFormFieldModule,
      DragDropModule,
      LayoutModule,
      MatIconModule,
      MatMenuModule,
      MatGridListModule,
      MatSortModule,
      MatPaginatorModule,
      ReactiveFormsModule,
      MatCardModule,
      MatRadioModule,
      MatSelectModule,
      MatButtonModule,
      MatInputModule,
      MatSliderModule

    ],
    declarations: [
      ListComponent,
      EditingDialogComponent,
      DeletingDialogComponent,
      EditComponent

    ]
})
export class HaoLayoutModule {}
