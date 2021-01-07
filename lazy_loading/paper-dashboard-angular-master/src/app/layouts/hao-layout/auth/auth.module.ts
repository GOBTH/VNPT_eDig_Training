import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatDialogModule
  ],
  declarations: [

  ]
})
export class AuthModule {}
