import { Component } from '@angular/core';

@Component({
  selector: 'app-conv-temp',
  templateUrl: './conv-temp.component.html',
  styleUrls: ['./conv-temp.component.css']
})
export class ConvTempComponent {

  public celsius: number = 0;
  public fahrenheit: number = 0;
  public kelvin: number = 0;

  public convTemp(): void {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}



