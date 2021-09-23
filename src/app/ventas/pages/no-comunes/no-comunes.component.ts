import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Rubi  ';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan',"Eduardo","Rogelio"];
  clientesMapa = {
    '=0':' no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarNombre(){
    this.nombre = 'Adrian';
    this.genero = 'masculino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyvalue pipe

  persona = {
    nombre :'Rogelio Reyes',
    edad: '24',
    nacionalidad: 'Mexicana'
  } 

  
  //json PIPE
  heroes=[
    {
      nombre:"Hulk",
      vuela:false
    },
    {
      nombre:"IronMan",
      vuela:true
    },
    {
      nombre:"Superman",
      vuela:true
    }
  ]
  
  //async Pipe
  miObservable = interval(1000);//emite 0,1,2,3... cada segundo (1000ms)
  
  valorPromesa = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos una promesa')
    }, 3000);
  })

  
  constructor() { }

  ngOnInit(): void {
  }

}
