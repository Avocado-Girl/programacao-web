import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-media',
  templateUrl: './calc-media.component.html',
  styleUrls: ['./calc-media.component.css']
})
export class CalcMediaComponent {

public Ac1 : number = 0;
public Ac2 : number = 0;
public AF : number = 0;
public AG: number = 0;
public mediaF : number = 0;
public resultado : string = '';

public Calc() : void {
this.mediaF = (this.Ac1 * 0.15) + (this.Ac2 * 0.30) + (this.AF * 0.45) + (this.AG * 0.10);


if (this.mediaF >= 5) {
  
  this.resultado = 'Aprovado';
} else {
  this.resultado = 'Reprovado';

    }
}

}
