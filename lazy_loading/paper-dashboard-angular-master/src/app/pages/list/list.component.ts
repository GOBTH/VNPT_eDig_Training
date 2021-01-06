import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA, EmployeeElement, EmployeesService } from './list-services.service';
import { DeletingDialogComponent } from './deleting-dialog/deleting-dialog.component';
import { EditingDialogComponent } from './editing-dialog/editing-dialog.component';
import { DataSource } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { Employee } from './models/employee.model';

@Component({
    selector: 'list-cmp',
    moduleId: module.id,
    templateUrl: 'list.component.html',
})

export class ListComponent implements OnInit {
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
  @ViewChild('list-cmp', {static: true}) paginator: MatPaginator | any;
  constructor(
    public eServices: EmployeesService,
    public dialog: MatDialog,
    private route: Router
  ){

  }

  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
  }

  getDateToString(date: Date){
    let dd = String(date.getDate()).padStart(2,'0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = String(date.getFullYear()).padStart(4, '0');
    return dd + '/' + mm + '/' + yyyy;
  }

  onNavigate(url: string){
    window.open(url, '_blank');
  }

  openDialog(id: string){
    let dialogRef = this.dialog.open(
      DeletingDialogComponent
    );

    dialogRef.afterClosed().subscribe(result => {
      if(`${result}` === 'true'){
        this.eServices.onRemove(id);
        this.refresh(id);
        //console.log(this.dataSource.data);
      }
    });
  }

  openDialogEditting(id: string){
    let dialogRef = this.dialog.open(EditingDialogComponent);
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
