import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-deleting-dialog',
  templateUrl: './deleting-dialog.component.html',
  styleUrls: ['./deleting-dialog.component.css']
})
export class DeletingDialogComponent implements OnInit {

  constructor(
    public eService: EmployeesService
  ) { }

  ngOnInit(): void {
  }

}
