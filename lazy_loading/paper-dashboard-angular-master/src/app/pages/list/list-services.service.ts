import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  lstEmployees: Employee[] = [
    {
      id : 'ABC_1',
      name : 'Nguyễn Vĩnh Phong',
      email : 'vinhphong@gmail.com',
      phone : '0372532090',
      birth : new Date('1996-01-31'),
      code: '02gp2lt512nvp',
      image: 'https://d25tv1xepz39hi.cloudfront.net/2017-09-04/files/portrait-photography_1661.jpg'
    },
    {
      id : 'BAC_2',
      name : 'Trần Bình Dương',
      email : 'binhduong@gmail.com',
      phone : '+84989878988',
      birth : new Date('1999-02-02'),
      code: '02gp2fd347tbd',
      image: 'https://studios.vn/wp-content/uploads/2017/05/bi-quyet-chup-anh-chan-dung-ngoai-troi-cho-nhiep-anh-gia-7.jpg'
    },
    {
      id: 'FGH_3',
      name: 'Lê Trung Nghĩa',
      email: 'trungnghia@gmail.com',
      phone: '0909000232',
      birth : new Date('1998-06-25'),
      code: '02gp2fd960ltn',
      image: 'https://media.cungcau.vn/files/kieunguyen/2019/11/16/1-2-0725.jpg'
    }

  ]
  constructor() { }
  onGet(){

    return this.lstEmployees;

  }

  onGetId(id: string){

    return this.lstEmployees.find(element => element.id === id);

  }

  onAdd(newEmployee: Employee){

    this.lstEmployees.push(newEmployee);
    ELEMENT_DATA = this.lstEmployees;

  }

  onRemove(id: string){

    const removedEmployee = this.onGetId(id) as Employee;
    const index = this.lstEmployees.indexOf(removedEmployee, 0);
    this.lstEmployees.splice(index, 1);
    //console.log(this.lstEmployees.length);

  }

  onRemoveDataSource(id: string): Observable<EmployeeElement[]> {
    //this.onRemove(id);
    let lst = this.onGet();
    return of(lst);
  }

  onUpdate(employee: Employee){
    let index = this.lstEmployees.findIndex(element => element.id === employee.id);
    this.lstEmployees[index] = employee;
    ELEMENT_DATA[index] = employee;
    console.log(ELEMENT_DATA);
  }

  onFindId(id: string){
    const employee = this.lstEmployees.find(element => element.id === id);
    if (employee === undefined){
      return false;
    }
    return true;
  }

}

export interface EmployeeElement {
  id: string ,
  name: string ,
  email: string ,
  phone: string ,
  birth: Date ,
  code: string ,
  image: string ,
}

export let ELEMENT_DATA: EmployeeElement [] = new EmployeesService().onGet();
