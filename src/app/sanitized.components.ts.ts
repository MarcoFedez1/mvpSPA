import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sanitized-component',
  templateUrl: '/components/employees/employees.component.html'
})

export class SanitizedComponent {
  
  constructor(private sanitizer: DomSanitizer) { }

// ngOnInit(){
// }


  getStyleDivContainer(aux?: string) {
    let divSpace: number;
    let divWork: number;
    let divContainer: string;
    let divMargen: number = 0.30;
    divSpace = window.innerWidth * divMargen;
    divWork = window.innerWidth - divSpace;
    switch (true) {
      case (divWork <= 700): {
        divContainer = ' column-count: 1; width: 100%;';
      }
      case (divWork >= 701 && divWork <= 900): {
        divContainer = ' column-count: 2; width: 100%;';
      }
      case (divWork >= 901 && divWork <= 1200): {
        divContainer = ' column-count: 3; width: 100%;';
      }
      case (divWork >= 1201): {
        divContainer = ' column-count: 4; width: 100%;';
      }
    }
    console.log('Work Space: ' + divWork);
    console.log('Style = ' + divContainer);
    // sanitize the style expression
    return this.sanitizer.bypassSecurityTrustStyle(divContainer);
  }

  getStyleDivCardContainer() {
    let divSpace: number;
    let divWork: number;
    let divCardContainer: string;
    let divMargen: number = 0.30;
    divSpace = window.innerWidth * divMargen;
    divWork = window.innerWidth - divSpace;
    switch (true) {
      case (divWork <= 700): {
        divCardContainer = ' width: 450px; height: 40%;';
      }
      case (divWork >= 701 && divWork <= 900): {
        divCardContainer = ' width: 400px; height: 40%;';

      }
      case (divWork >= 901 && divWork <= 1200): {
        divCardContainer = ' width: 350px; height: 40%;';
      }
      case (divWork >= 1201): {
        divCardContainer = ' width: 300px; height: 40%;';
      }
    }
    console.log('Work Space: ' + divWork);
    console.log('Style = ' + divCardContainer);
    // sanitize the style expression
    return this.sanitizer.bypassSecurityTrustStyle(divCardContainer);
  }
}
