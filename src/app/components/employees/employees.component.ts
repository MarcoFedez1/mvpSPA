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
  constructor(private heroeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.employees = this.heroeService.getEmployees();
  }
  gotoEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }  
}

//----------------------------------   PRUEBA
// export class Responsive implements OnInit {
//   private PDivContainer: string;
//   private PCarContainer: string;

//   constructor(DivContainer: string, CarContainer: string){
//       this.PDivContainer = DivContainer;
//       this.PCarContainer = CarContainer;
//   }

//   ngOnInit(){
//     console.log('Holiiiiii')
//     let divC = document.getElementById('DivCard')[0];
//     let css = ' .div {background-color: blueviolet;}';
//     //let head = document.getElementsByTagName('head')[0];
//     let style = document.createElement('style');
//     style.type = 'text/css';
//     style.appendChild(document.createTextNode(css));
//     divC.appendChild(style);
//   }
// }
    // const divC = document.getElementById('DivCard')[0];
    // const css = ' .div {background-color: blueviolet;}';
    // //let head = document.getElementsByTagName('head')[0];
    // const style = document.createElement('style');
    // style.type = 'text/css';
    // style.appendChild(document.createTextNode(css));
    // divC.appendChild(style);
    // let head = document.getElementsByName('CssClass')[0];
    // let css = '.DivCard {background-color: blueviolet;}';
    // let style = document.createElement('style');
    // style.type = 'text/css';
    // style.appendChild(document.createTextNode(css));
    //style.appendChild(document.createAttribute(css))
    //this.el.nativeElement.appendChild(style);
    //head.appendChild(style);
    //@Input('appHighlight')highlightColor: string;