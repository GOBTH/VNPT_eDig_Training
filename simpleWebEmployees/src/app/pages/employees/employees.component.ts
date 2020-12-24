import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(
    private employeeServices: EmployeeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.employees = this.employeeServices.onGet();
  }

}
