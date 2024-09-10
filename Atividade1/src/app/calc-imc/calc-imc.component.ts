import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.css']
})
export class CalcImcComponent {
  public peso: number = 0;
  public altura: number = 0;
  public imc: number = 0;
  public resultado: string = '';

  public calcuIMC(): void {
    if (this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      this.resultado = this.faixa(this.imc);
    } else {
      this.resultado = 'Altura inválida';
    }
  }

  private faixa(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  }
}
