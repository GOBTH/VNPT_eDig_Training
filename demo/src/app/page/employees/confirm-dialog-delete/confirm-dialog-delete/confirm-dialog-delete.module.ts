import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogDeleteComponent } from '../confirm-dialog-delete.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';



@NgModule({
  declarations: [
    ConfirmDialogDeleteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ConfirmDialogDeleteComponent
  ],
  providers: [
    ConfirmDialogService
  ]
})
export class ConfirmDialogDeleteModule { }
