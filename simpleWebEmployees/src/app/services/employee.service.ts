import { transition } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[]=[
    {
      id: 1,
      name: "Hao 1",
      email: "wind1@gmail.com",
      phone: 111
    }
    ,{
      id: 2,
      name:"Hao 2",
      email:"wind2@gmail.com",
      phone: 222
    }
  ];
  constructor() { }
  onGet(){
    return this.employees;
  }
}
