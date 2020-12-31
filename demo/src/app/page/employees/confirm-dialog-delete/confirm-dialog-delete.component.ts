import { Component, Input, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog-delete',
  templateUrl: './confirm-dialog-delete.component.html',
  styleUrls: ['./confirm-dialog-delete.component.css']
})
export class ConfirmDialogDeleteComponent implements OnInit {
  message: any;
  constructor(private confirmDialogService: ConfirmDialogService) {

  }

  ngOnInit(): void {
    this.confirmDialogService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
