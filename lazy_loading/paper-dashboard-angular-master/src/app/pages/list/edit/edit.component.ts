import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../models/employee.model';
import { EmployeeElement, ELEMENT_DATA, EmployeesService } from '../list-services.service';
@Component({
  selector: 'edit-cpm',
  moduleId: module.id,
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  id: string | any;
  dataSource = new MatTableDataSource<EmployeeElement>(ELEMENT_DATA);
  employee = {
    id     : '',
    name   : '',
    email  : '',
    phone  : '',
    birth  : new Date('2000-01-01'),
    code   : '',
    image  : ''
  } as Employee;
  flag = false;
  editOrAdd = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeServices: EmployeesService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    //console.log(this.id);
    this.editOrAdd = (String(this.id) !== '0');
    if (this.editOrAdd) {
      this.employee = this.employeeServices.onGetId(this.id) as Employee;
    }
  }

  onSubmit(form: NgForm){
    //console.log(form.value);
    this.flag = this.cEmail(form.value.email)
    && this.cName(form.value.name)
    && this.cPhone(form.value.phone)
    && this.cImageLink(form.value.image)
    && this.cCode(form.value.code);
    //console.log(this.cImageLink(form.value.image));
    if (this.flag === true || this.id === '0'){
      const e: Employee = {
        id: this.id,
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        birth: form.value.birth,
        code: form.value.code,
        image: form.value.image
      };
      if (this.id === '0' && this.onCheck(form)){
        e.id = this.randomId();
        this.employeeServices.onAdd(e);
        //console.log(this.employeeServices.lstEmployees.length);
      }
      else{
        this.employeeServices.onUpdate(e);
        console.log('update');
        console.log(this.employeeServices.lstEmployees[0]);
      }

    }
  }

  onCheck(form: NgForm){
    return this.flag = this.cEmail(form.value.email)
    && this.cName(form.value.name)
    && this.cPhone(form.value.phone)
    && this.cImageLink(form.value.image)
    && this.cCode(form.value.code);
  }

  cName(name: string | undefined){
    if (!name || name === '' || name === ' '){
      return false;
    }
    let s = '0123456789!#$%^&*()-_+{}[];:\'\"?/>.<,';
    for(let i = 0 ; i < s.length ; i++){
      for (let j = 0 ; j < name.length ; j++){
        if (s[i] === name[j]) {
          return false;
        }
      }
    }
    return true;
  }

  cEmail(email: string){
    // console.log(email);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  cPhone(phone: string){
    const re = new RegExp('^((\\+84-?)|0)?[0-9]{10}$');
    return re.test(String(phone));
  }

  cImageLink(url: string){
    const re1 = new RegExp('\.(jpeg|jpg|gif|png)$');
    let s = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})';
    const re2 = new RegExp(s);
    return re1.test(url) && re2.test(url);
  }

  onBack(){
    if (this.flag === true || this.editOrAdd === false){
      this.router.navigateByUrl('');
    }
  }

  cCode(code: string | undefined) {
    if (!code || code === '' || code === ' '){
      return false;
    }
    const s = '!#$%^&*()-_+{}[];:\'\"?/>.<,';
    for(let i = 0 ; i < s.length ; i++) {
      for (let j = 0 ; j < code.length ; j++){
        if (s[i] === code[j]) {
          return false;
        }
      }
    }
    return true;
  }

  modeDisplayDate(date: Date){
    let x = new DatePipe('vi');
    return String(x.transform(date, 'dd/MM/yyyy'));
  }

  randomId(){
    const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    length = 4;
    let res = '';
    for (let i = 0 ; i < length ; i++){
      res += s.charAt(Math.floor(Math.random() * s.length));
    }
    return res;
  }
}
