import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  employee: any = {};
  constructor( private activateRouter: ActivatedRoute, private employeeService: EmployeeService) {
      this.activateRouter.params.subscribe( params => {
        this.employee = this.employeeService.getEmployeeById( params.id );
        console.log(this.employee);
      });
   }

  ngOnInit() {
  }
}
