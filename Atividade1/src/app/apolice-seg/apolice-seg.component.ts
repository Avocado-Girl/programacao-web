import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seg',
  templateUrl: './apolice-seg.component.html',
  styleUrls: ['./apolice-seg.component.css']
})
export class ApoliceSegComponent {
  public nomeResponsavel: string = '';
  public genero: string = '';
  public idade: number = 0;
  public valorAuto: number = 0;
  public valorApolice: number = 0;

  public calcularApolice(): void {
    if (this.genero === 'masculino' && this.idade <= 25) {
      this.valorApolice = this.valorAuto * 0.15;

    } else if (this.genero === 'masculino' && this.idade > 25) {
      this.valorApolice = this.valorAuto * 0.10;

    } else if (this.genero === 'feminino') {
      this.valorApolice = this.valorAuto* 0.08;
      
    } else {
      alert('Genero inválido');
      this.valorApolice = 0;
    }
  }
}

