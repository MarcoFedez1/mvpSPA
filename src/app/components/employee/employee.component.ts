import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService, Projects } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  lista: any = {};
  // string[] = [ 'hola', 'que' , 'tal' , 'estas' ];
  employee: any = {};
  constructor( private activateRouter: ActivatedRoute, private employeeService: EmployeeService) {
      this.activateRouter.params.subscribe( params => {
        this.employee = this.employeeService.getEmployeeById( params.id );
        this.lista = this.employee.projects;
        console.log(this.employee);
      });
   }
  ngOnInit() {
  }
}
