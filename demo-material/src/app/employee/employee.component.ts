import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from '../models/employee.models';
import { EmployeesService } from '../services/employees.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DeletingDialogComponent } from './deleting-dialog/deleting-dialog.component';

export interface EmployeeElement {
  id: string ,
  name: string ,
  email: string ,
  phone: string ,
  birth: Date ,
  code: string ,
  image: string ,
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource = this.eServices.onGet();
  displayedColumns: string[] = [
    'id' ,
    'name' ,
    'email' ,
    'phone' ,
    'birth' ,
    'code' ,
    'image' ,
    'edit',
    'delete'
  ];

  constructor(
    public eServices: EmployeesService,
    public dialog: MatDialog
    ) { }
  ngOnInit(): void {
  }

  getDateToString(date: Date){
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = String(date.getFullYear()).padStart(4, '0');
    return dd + '/' + mm + '/' + yyyy;
  }

  onNavigate(url: string){
    window.open(url, '_blank');
  }

  openDialog(id: string){
    let dialogRef = this.dialog.open(DeletingDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(`${result}` === 'true'){
        console.log('Chua biet cach update lai cai danh sach');
      }
    });
  }

}
