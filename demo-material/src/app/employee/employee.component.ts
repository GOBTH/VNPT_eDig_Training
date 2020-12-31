import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from '../models/employee.models';
import { EmployeesService } from '../services/employees.service';
import { DatePipe } from '@angular/common';

export interface EmployeeElement {
  id: string ,
  name: string ,
  email: string ,
  phone: string ,
  birth: Date ,
  code: string ,
  image: string ,
}

const ELEMENT_DATA: Employee[] = new EmployeesService().onGet();

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
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
  dataSource = ELEMENT_DATA;
  constructor() { }
  ngOnInit(): void {
  }

  // public getDateToString(date: Date, mode = 'dd-MM-yyyy', location = 'vi'){
  //   let datepipe = new DatePipe(location);
  //   return datepipe.transform(date, mode);
  // }
  getDateToString(date: Date){
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = String(date.getFullYear()).padStart(4, '0');
    return dd + '/' + mm + '/' + yyyy;
  }

  onNavigate(url: string){
    //const url = 'https://www.google.com';
    window.open(url, '_blank');
  }

}
