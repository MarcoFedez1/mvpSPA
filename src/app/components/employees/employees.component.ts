import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor( private heroeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.employees = this.heroeService.getEmployees();
    console.log(this.employees);
  }
  gotoEmployee(id: string) {
    this.router.navigate(['/employee', id] );
  }

}
