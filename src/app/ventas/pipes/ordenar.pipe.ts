import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: keyof Heroe = 'nombre'): Heroe[] {
    return heroes.sort((a, b) => a[ordenarPor] > b[ordenarPor] ? 1 : -1);
  }

}
