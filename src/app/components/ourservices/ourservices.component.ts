import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './ourservices.component.html'
  })
export class OurServicesComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }
  }
