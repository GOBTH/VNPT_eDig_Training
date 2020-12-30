import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string | null = null;
  header = '';
  employee: any = {
    id: 0,
    name: '',
    email: '',
    phone: 0
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = this.id === '0' ? 'Add employee' : 'Edit employee';

    if (this.id !== '0'){
      this.employee = this.employeeService.onGetEmployee(Number(this.id));
    }
  }

  onSubmit(form: NgForm){
    // console.log(form.value);
    let flag = false;

    if (flag === false){
      const dateChecking        = this.checkDate(form.value.birth);
      const emailChecking       = this.checkEmail(form.value.email);
      const phoneNumberChecking = this.checkPhone(form.value.phone);
      const imageChecking       = this.checkImageUrl(form.value.image);
      if (dateChecking && emailChecking && phoneNumberChecking && imageChecking){
        flag = true;
      }
    }
    if (flag === true){
      let employee: Employee = {
        id: form.value.id,
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        birth: new Date(this.revertDate(form.value.birth)),
        code: form.value.code,
        image: form.value.image
      }
      if (this.id === '0'){
        this.employeeService.onAdd(employee);
      }
      else{
        this.employeeService.onUpdate(employee);
      }
      this.router.navigateByUrl('');
    }
  }
  formatDate(date: Date){
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = String(date.getFullYear()).padStart(4, '0');
    return dd + '-' + mm + '-' + yyyy;
  }
  revertDate(s: string){
    let t = s.replace('/', '-');
    let arrS = t.split('-');
    return arrS[2] + '-' + arrS[1] + '-' + arrS[0];
  }
  getNewMax(){
    return this.employeeService.getNewMax();
  }
  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkDate(strDate: string){
    // if (strDate === ''){
    //   return false;
    // }
    // else{
    //   const arr = strDate.split('-');
    //   if (arr.length !== 3){
    //     return false;
    //   }
    //   else{
    //     return RegExp('^[0-9]').test(arr[0]) && RegExp('^[0-9]').test(arr[1]) && RegExp('^[0-9]').test(arr[2]);
    //   }
    // }
    return true;
  }
  checkPhone(phone: number){
    const re = new RegExp('^[0-9]{10}');
    return re.test(String(phone));
  }

  checkEmail(strEmail: string){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(strEmail).toLowerCase());
  }

  public checkImageUrl(url: string){
    const re = new RegExp('\.(jpeg|jpg|gif|png)$');
    return re.test(url);
  }
}
