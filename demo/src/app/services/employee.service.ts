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
      phone : 1,
      birth : new Date('2000-01-23'),
      code: '1',
      image: 'https://d25tv1xepz39hi.cloudfront.net/2017-09-04/files/portrait-photography_1661.jpg'
    },
    {
      id : 2,
      name : 'B',
      email : 'b@gmail.com',
      phone : 2,
      birth : new Date('2001-01-23'),
      code: '2',
      image: 'https://studios.vn/wp-content/uploads/2017/05/bi-quyet-chup-anh-chan-dung-ngoai-troi-cho-nhiep-anh-gia-7.jpg'
    },
    {
      id: 3,
      name: 'C',
      email: 'c@gmail.com',
      phone: 3,
      birth : new Date('2002-01-23'),
      code: '3',
      image: 'https://media.cungcau.vn/files/kieunguyen/2019/11/16/1-2-0725.jpg'
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
    oldEmployee.birth = employee.birth;
    oldEmployee.code = employee.code;
    oldEmployee.image = employee.image;
  }
  onFindId(id: number){
    let x = this.employees.find(x => x.id === id);
    if (x !== undefined){
      return false;
    }

    return true;
  }

  getNewMax(){
    let oldMax = 0;
    this.employees.forEach(element => {
      if (element.id > oldMax){
        oldMax = element.id;
      }
    });
    return oldMax + 1;
  }
}
