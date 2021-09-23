import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombreLower: string = 'ADRIAN REYES';
  nombreUpper: string = 'adrian reyes';
  nombreTitle: string = 'AdRiAn ReYeS';

  fecha: Date =  new Date();//El dia de hoy

}
