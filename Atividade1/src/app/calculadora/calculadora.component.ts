import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {


  Num1: number = 0;
  Num2: number = 0;
  operacao: string = 'soma';
  resultado: number | string = '';

  Calc() {
    switch (this.operacao) {

      case 'soma':
        this.resultado = this.Num1 + this.Num2;
        break;

      case 'subtracao':
        this.resultado = this.Num1 - this.Num2;
        break;

      case 'multiplicacao':
        this.resultado = this.Num1 * this.Num2;
        break;

      case 'divisao':
        if (this.Num2 !== 0) {
          this.resultado = this.Num1 / this.Num2;
        } else {
          this.resultado = 'Divisão por zero';
        }
        break;

      default:
        this.resultado = 'Invalida';
    }
  }
}

