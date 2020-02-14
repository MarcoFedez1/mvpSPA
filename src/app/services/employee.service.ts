import { Injectable } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee: any[] = [
    {
      name: 'Marco Antonio Fernandez García',
      profile: 'The boss',
      img: 'assets/img/marco.png',
      birthday: '1985-06-12',
      biography: 'biography',
      hobbies: 'hobbies',
      Tools: 'Tools',
      projects:  [new Projects('projects 1' , 'Company 1', 'Tester', '1 Month'),
      new Projects('projects 2' , 'Company 2', 'Tester', '1 Month'),
      new Projects('projects 3' , 'Company 3', 'Tester', '1 Month'),
    ]
      //   name: 'projects 1',
      //   companyname: 'Company 1',
      //   rol: 'Tester',
      //   time: '1 Month'
      // },
      // {
      //   name: 'projects 2',
      //   companyname: 'Company 2',
      //   rol: 'Tester',
      //   time: '2 Month'
      // }
    },
    {
      name: 'Paulina Elizabeth Fernandez García',
      profile: 'RH',
      img: 'assets/img/paulina.png',
      birthday: '1989-06-15',
      biography: 'biography',
      hobbies: 'hobbies',
      Tools: 'Tools',
      projects: []
      // [{
      //   name:  '',
      //   companyname: '',
      //   rol: '',
      //   time: ''
      // }]
    },
    {
      name: 'Karla Paola Lopez Fuentes',
      profile: 'QA',
      img: 'assets/img/karla.png',
      birthday: '1989-06-30',
      biography: 'biography',
      hobbies: 'hobbies',
      Tools: 'Tools',
      projects: []
    //   [{
    //     name: 'projects 1',
    //     companyname: 'Company 1',
    //     rol: 'Tester',
    //     time: '1 Month'
    //   },
    //   {
    //     name: 'projects 2',
    //     companyname: 'Company 2',
    //     rol: 'Tester',
    //     time: '2 Month'
    //   }
    // ]
    },
    {
      name: 'Ileana Ruiz Almazan',
      profile: 'QA',
      img: 'assets/img/ileana.png',
      birthday: '1993-10-07',
      biography: '',
      hobbies: '',
      Tools: '',
      projects:  [new Projects('projects 1' , 'Company 1', 'Tester', '1 Month')]
      // [{
      //   name:  '',
      //   companyname: '',
      //   rol: '',
      //   time: ''
      // }]
    },
    {
      name: 'Mayra Graciela Lopez Campos',
      profile: 'QA',
      img: 'assets/img/mayra.png',
      birthday: '1992-09-15',
      biography: 'biography',
      hobbies: 'hobbies',
      Tools: 'Tools',
      projects: []
      // [{
      //   name:  '',
      //   companyname: '',
      //   rol: '',
      //   time: ''
      // }]
    },
    {
      name: 'Omar Beltran del Rio Mendez',
      profile: 'QA',
      img: 'assets/img/omar.png',
      birthday: '1993-01-11',
      biography: 'biography',
      hobbies: 'hobbies',
      Tools: 'Tools',
      projects: []
    },
    {
      name: 'Cindy M. Chavira Cornejo',
      profile: 'QA',
      img: 'assets/img/cindy.png',
      birthday: '1993-05-01',
      biography: 'biography',
      hobbies: 'hobbies',
      Tools: 'Tools',
      projects: []
    },
    {
      name: 'Miguel Armando Chavira Cornejo',
      profile: 'QA',
      img: 'assets/img/miguel.png',
      birthday: '1997-09-07',
      biography: 'biography',
      hobbies: 'hobbies',
      Tools: 'Tools',
      projects: []
      // [{
      //   name:  '',
      //   companyname: '',
      //   rol: '',
      //   time: ''
      // }]
    }
  ];
  constructor() {
    console.log('Servicio listo para usar!!!');
  }
  getEmployees() {
    return this.employee;
  }
  getEmployeeById(idx: number) {
    return this.employee[idx];
  }
}

export interface Employee {
  name: string;
  profile: string;
  img: string;
  birthday: string;
  biography: string;
  hobbies: string;
  tools: string;
  projects: Projects[];
}

// class Projects {
//   name: string;
//   companyname: string;
//   rol: string;
//   time: string;
// }

class EmployeeX {
  name: string;
  profile: string;
  img: string;
  birthday: string;
  biography: string;
  hobbies: string;
  tools: string;
  projects: Projects[];
}

export class Projects {
  constructor(
  public name: string,
  public companyname: string,
  public rol: string,
  public time: string) { }
}
