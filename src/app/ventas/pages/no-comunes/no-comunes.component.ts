import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  //i18nSelect
  public nombre: string = 'María';
  public genero: string = 'femenino';

  invitacionMapa = {
    "masculino": "invitarlo",
    "femenino": "invitarla"
  };

  //i18nPlural
  clientes : string[] = ["Maria", "Jose", "Juan", "Pedro"];
  clientesMapa = {
    '=0': 'no tenemos ningpun clente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarNombre(){
    this.nombre = 'Jeisson';
    this.genero = 'masculino';
  }

  eliminarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Jeisson',
    edad: 23,
    ciudad: 'San Marcos'
  }

  //JSON Pipe
 heroes = [
  {
    nombre: 'Super-Man',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
 ]

 //Async Pipe
 miObservable = interval(1000);
 valorPromesa = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve('Tenemos data de la promesa')
  }, 3500);
 })
}
