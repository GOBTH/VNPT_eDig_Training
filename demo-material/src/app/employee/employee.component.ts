import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from '../models/employee.models';
import { EmployeesService, EmployeeElement, ELEMENT_DATA } from '../services/employees.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DeletingDialogComponent } from './deleting-dialog/deleting-dialog.component';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EdittingDialogComponent } from './editting-dialog/editting-dialog.component';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource = new MatTableDataSource<EmployeeElement>(ELEMENT_DATA);
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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | any;
  constructor(
    public eServices: EmployeesService,
    public dialog: MatDialog,
    private route: Router
    ) { }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
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
        this.eServices.onRemove(id);
        this.refresh(id);
        //console.log(this.dataSource.data);
      }
    });
  }

  openDialogEditting(id: string){
    let dialogRef = this.dialog.open(EdittingDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (`${result}` === 'true'){

      }
    });
  }

  refresh(id: string){
    this.eServices.onRemoveDataSource(id).subscribe((data: EmployeeElement[]) => {
      this.dataSource.data = data;
    });
  }
}
