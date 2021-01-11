import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../models/employee.model';
import { EmployeeElement, ELEMENT_DATA, EmployeesService } from '../list-services.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter';


export interface DialogData {
  id: string;
}
@Component ( {
  selector: 'edit-cpm',
  moduleId: module.id,
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit  {
  id: string | any;
  selectedDate: NgbDate = undefined;
  dataSource = new MatTableDataSource<EmployeeElement> (ELEMENT_DATA);
  employee =  {
    id     : '',
    name   : '',
    email  : '',
    phone  : '',
    birth  : new Date ('2000-01-01'),
    code   : '',
    image  : ''
  } as Employee;
  flag = false;
  isEdit = true;
  constructor (
    private router: Router,
    // private route: ActivatedRoute,
    private employeeServices: EmployeesService,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData
  )  { }

  ngOnInit (): void  {
    // this.id = this.route.snapshot.paramMap.get ('id') as string;
    this.id = this.data.id;
    // console.log (this.id);
    this.isEdit =  (this.id !== '0');
    if  (this.isEdit)  {
      this.employee = this.employeeServices.onGetId(this.id) as Employee;
      this.selectedDate = {
        day: this.employee.birth.getDate(),
        month: this.employee.birth.getMonth() + 1,
        year: this.employee.birth.getFullYear()
      } as NgbDate;
    }
    // console.log (this.employee);
  }

  onSubmit (form: NgForm) {
    // console.log (form.value);
    this.flag = this.onCheck(form);
    // console.log (this.flag);
    if  (this.flag === true || this.id === '0')  {
      let e: Employee =  {
        id: this.id,
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        //birth: this.formatDate(form.value.birth),
        code: form.value.code,
        image: form.value.image
      } as Employee;
      try{
        e.birth=this.formatDate(form.value.birth);
        // console.log('try .... formatDate'+form.value.birth);
        this.selectedDate=form.value.birth;
      }
      catch{
        e.birth=form.value.birth;

      }
      // console.log(form.value);
      if  (this.id === '0' && this.onCheck(form))  {
        e.id = this.randomId();
        this.employeeServices.onAdd(e);
        // console.log (this.employeeServices.lstEmployees.length);
      } else  {
        this.employeeServices.onUpdate(e);
        // console.log ('update');
        // console.log (this.employeeServices.lstEmployees[0]);
      }
    }

  }

  onBack(){
    this.router.navigateByUrl('list');
  }

  onEmptyInfo() {
    return  this.employee.name  === '' &&
            this.employee.email === '' &&
            this.employee.code  === '' &&
            this.employee.phone === '' &&
            this.employee.image === '';
  }
  onCheck (form: NgForm) {
    // console.log();
    let flag = this.cEmail (form.value.email)
    && this.cName (form.value.name)
    && this.cPhone (form.value.phone)
    && this.cImageLink (form.value.image)
    && this.cCode (form.value.code);
    // console.log(this.cEmail (form.value.email));
    // console.log(this.cName (form.value.name));
    // console.log(this.cPhone (form.value.phone));
    // console.log(this.cImageLink (form.value.image));
    // console.log(this.cCode (form.value.code));
    return flag;
  }

  cName (name: string | undefined) {
    // console.log('name: ' + name);
    if  (!name || name === '' || name === ' ') {
      return false;
    }
    const s = '0123456789!#$%^&*()-_+{}[];:\'\"?/>.<,';
    for (let i = 0 ; i < s.length ; i++) {
      for  (let j = 0 ; j < name.length ; j++) {
        if  (s[i] === name[j])  {
          console.log(s[i].charCodeAt(0));
          return false;
        }
      }
    }
    return true;
  }

  cEmail (email: string) {
    // console.log('email: ' + email);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9] {1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test (String (email).toLowerCase());
  }

  cPhone (phone: string) {
    // console.log('phone: ' + phone);
    const re = new RegExp ('^((\\+84-?)|0)?[0-9]{9}$');
    return re.test(phone);
  }

  cImageLink (url: string)  {
    // console.log('url ' + url);
    const re1 = new RegExp ('\.(jpeg|jpg|gif|png)$');
    return re1.test(url);
    // let s = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s] {2,})';
    // const re2 = new RegExp (s);
    // return re1.test (url) && re2.test (url);
  }

  cCode (code: string | undefined)  {
    // console.log('code ' + code);
    if  (!code || code === '' || code === ' ') {
      return false;
    }
    const s = '!@#$%^&*()-_+{}[];:\'\"?/>.<,';
    for (let i = 0 ; i < s.length ; i++)  {
      for  (let j = 0 ; j < code.length ; j++) {
        if  (s[i] === code[j])  {
          return false;
        }
      }
    }
    return true;
  }

  modeDisplayDate (date: Date)  {
    const x = new DatePipe ('vi');
    return String (x.transform (date, 'dd/MM/yyyy'));
  }

  randomId ()  {
    const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    length = 4;
    let res = '';
    for  (let i = 0 ; i < length ; i++)  {
      res += s.charAt (Math.floor (Math.random () * s.length));
    }
    return res;
  }

  formatDate(object: any){
    return new Date(object.year + '-' + object.month + '-' + object.day);
  }

  outCautions(form: NgForm){
    let s : String[] = [];
    if (this.cName(form.value.name)==false){
      s.push('Nhập sai định dạng tên, hãy nhập lại. \n');
    }
  }



}
