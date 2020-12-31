import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private confirmDialogService: ConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }
  onDelete(id: number){
    let confirm = window.confirm('Nhấp OK nếu bạn chắc chắn muốn xóa?');
    if (confirm){
      this.employeeService.onDelete(id);
    }
  }

  formatDate(date: Date){
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = String(date.getFullYear()).padStart(4, '0');
    return dd + '-' + mm + '-' + yyyy;
  }
  showDialog(){
    this.confirmDialogService.confirmThis('Are you sure to delete ?', function(){
      alert('Yes');
    }, function(){
      alert('No');
    })
  }
  clickMethod(id: number){
    if(confirm("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
      this.employeeService.onDelete(id);
    }
  }
}
