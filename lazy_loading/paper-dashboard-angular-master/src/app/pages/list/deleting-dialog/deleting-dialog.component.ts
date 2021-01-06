import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../list-services.service';

@Component({
  selector: 'delete-cpm',
  templateUrl: './deleting-dialog.component.html',
})
export class DeletingDialogComponent implements OnInit {

  constructor(
    public eService: EmployeesService
  ) { }

  ngOnInit(): void {
  }

}
