import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1!:number;
  num2!:number;
  operacion!:string;
  resul= "(No eligió operación)";
}
