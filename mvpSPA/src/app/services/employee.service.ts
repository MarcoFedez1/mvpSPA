import { Injectable } from '@angular/core';

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
      biography: '',
      hobbies: '',
      Tools: '',
      proyect: ''
    },
    {
      name: 'Paulina Elizabeth Fernandez Garcia',
      profile: 'RH',
      img: 'assets/img/paulina.png',
      birthday: '1989-06-15',
      biography: '',
      hobbies: '',
      Tools: '',
      proyect: ''
    },
    {
      name: 'Karla Paola Lopez Fuentes',
      profile: 'QA',
      img: 'assets/img/karla.png',
      birthday: '1989-06-30',
      biography: '',
      hobbies: '',
      Tools: '',
      proyect: ''
    },
    {
      name: 'Ileana Ruiz Almazan',
      profile: 'QA',
      img: 'assets/img/ileana.png',
      birthday: '1993-10-07',
      biography: '',
      hobbies: '',
      Tools: '',
      proyect: ''
    },
    {
      name: 'Mayra Graciela Lopez Campos',
      profile: 'QA',
      img: 'assets/img/mayra.png',
      birthday: '1992-09-15',
      biography: '',
      hobbies: '',
      Tools: '',
      proyect: ''
    },
    {
      name: 'Omar Beltran del Rio Mendez',
      profile: 'QA',
      img: 'assets/img/omar.png',
      birthday: '1993-01-11',
      biography: '',
      hobbies: '',
      Tools: '',
      proyect: ''
    },
    {
      name: 'Cindy M. Chavira Cornejo',
      profile: 'QA',
      img: 'assets/img/cindy.png',
      birthday: '1993-05-01',
      biography: '',
      hobbies: '',
      Tools: '',
      proyect: ''
    },
    {
      name: 'Miguel Armando Chavira Cornejo',
      profile: 'QA',
      img: 'assets/img/miguel.png',
      birthday: '1997-09-07',
      biography: '',
      hobbies: '',
      Tools: '',
      proyect: ''
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
  proyect: string;
}
