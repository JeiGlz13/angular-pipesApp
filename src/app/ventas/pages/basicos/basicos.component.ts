import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent  {
  nombreLower: string = 'jeisson';
  nombreUpper: string = 'JEISSON';
  nombreCompleto: string = 'JeIssoN';

  fecha: Date = new Date();

}
