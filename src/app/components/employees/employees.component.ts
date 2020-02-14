import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})

export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private heroeService: EmployeeService, private router: Router, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.employees = this.heroeService.getEmployees();
  }
  gotoEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }  

  getStyleDivContainer() {
    let divSpace: number;
    let divWork: number;
    let divContainer: string;
    let divMargen: number = 0.10;
    divSpace = window.innerWidth * divMargen;
    divWork = window.innerWidth - divSpace;
    switch (true) {
      case (divWork <= 700): 
        divContainer = ' column-count: 1; heigth: 100%;';
        break;
      case (divWork >= 701 && divWork <= 900): 
        divContainer = ' column-count: 2;  heigth: 100%;';
        break;
      case (divWork >= 901 && divWork <= 1200):
        divContainer = ' column-count: 3;  heigth: 100%;';
        break;
      case (divWork >= 1201): 
        divContainer = ' column-count: 4;  heigth: 100%;';
        break;
    }
    console.log('Work Space: ' + divWork);
    console.log('Style = ' + divContainer);
    // sanitize the style expression
    return this.sanitizer.bypassSecurityTrustStyle(divContainer);
  } 
}