import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../../layouts/hao-layout/auth/auth.service';

@Component({
  selector: 'app-editing-dialog',
  templateUrl: './editing-dialog.component.html',
})
export class EditingDialogComponent implements OnInit {
  message = '';
  constructor(
  ) {
    this.message = 'Go';
  }

  ngOnInit(): void {
  }
  go(){

  }
  back(){

  }

}
