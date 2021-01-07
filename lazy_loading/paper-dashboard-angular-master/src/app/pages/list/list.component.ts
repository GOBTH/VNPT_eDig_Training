
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
import { AuthService } from '../../layouts/hao-layout/auth/auth.service';
import { EditComponent } from './edit/edit.component';



@Component ( {
    selector: 'list-cmp',
    moduleId: module.id,
    templateUrl: 'list.component.html',
})

export class ListComponent implements OnInit  {
  dataSource = new MatTableDataSource<EmployeeElement> (ELEMENT_DATA);
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
  @ViewChild ('list-cmp',  {static: true}) paginator: MatPaginator | any;
  constructor (
    public eServices: EmployeesService,
    public dialog: MatDialog,
    private router: Router,
    public authService: AuthService,
  ) {

  }

  ngOnInit (): void  {
    this.dataSource.paginator = this.paginator;
  }

  getDateToString (date: Date) {
    const dd = String (date.getDate ()).padStart (2, '0');
    const mm = String (date.getMonth () + 1).padStart (2, '0');
    const yyyy = String (date.getFullYear ()).padStart (4, '0');
    return dd + '/' + mm + '/' + yyyy;
  }

  onNavigate (url: string)  {
    window.open (url, '_blank');
  }

  openDialog (id: string) {
    const dialogRef = this.dialog.open (
      DeletingDialogComponent
    );

    dialogRef.afterClosed ().subscribe (result =>  {
      if (`${result}` === 'true') {
        this.eServices.onRemove (id);
        this.refresh (id);
        // console.log (this.dataSource.data);
      }
    });
  }
  openDialogEditting (ID: string)  {
    const dialogRef = this.dialog.open (EditComponent,  {data:  {id: ID}});
    dialogRef.afterClosed ().subscribe (result =>  {
      if  (`${result}` === 'true')  {
        this.router.navigateByUrl ('list');
      }
    });
  }

  refresh (id: string)  {
    this.eServices.onRemoveDataSource (id).subscribe ( (data: EmployeeElement[]) =>  {
      this.dataSource.data = data;
    });
  }

}
