import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string | null = null;
  employee = new Employee();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeServices: EmployeesService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.employee = this.employeeServices.onGetId(this.id) as Employee;
  }

  onSubmit(form: NgForm){

  }

}
