import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-editting-dialog',
  templateUrl: './editting-dialog.component.html',
  styleUrls: ['./editting-dialog.component.css']
})
export class EdittingDialogComponent implements OnInit {

  constructor(
    public eService: EmployeesService
  ) { }

  ngOnInit(): void {
  }

}
