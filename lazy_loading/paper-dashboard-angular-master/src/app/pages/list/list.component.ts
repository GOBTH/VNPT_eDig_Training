import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA, EmployeeElement, EmployeesService } from './list-services.service';
@Component({
    selector: 'list-cmp',
    moduleId: module.id,
    templateUrl: 'list.component.html'
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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | any;
  displayColumns: string[] = [
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
    public dialog: MatDialog,
    private route: Router
  ){

  }

  ngOnInit(): void{

  }

}
