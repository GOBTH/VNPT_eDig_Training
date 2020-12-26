import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id : 1,
      name : 'A',
      email : 'a@gmail.com',
      phone : 1
    },
    {
      id : 2,
      name : 'B',
      email : 'b@gmail.com',
      phone : 2
    }
  ];
  constructor() { }

  onGet(){
    return this.employees;
  }

  onAdd(employee: Employee){
    this.employees.push(employee);
  }

  onDelete(id: number){
    let employee: Employee = this.employees.find(x => x.id === id) as Employee;
    let index = this.employees.indexOf(employee , 0);
    this.employees.splice(index, 1);
  }

  onGetEmployee(id: any){
    return this.employees.find(x => x.id === id);
  }

  onUpdate(employee: Employee){
    let oldEmployee : Employee = this.employees.find(x => x.id === employee.id) as Employee;
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;
  }
}
