import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  anio: number;
  COMPANY = 'MVP Software Solutions';
  constructor() {
    this.anio = new Date().getFullYear();
   }

  ngOnInit() {
  }

}
