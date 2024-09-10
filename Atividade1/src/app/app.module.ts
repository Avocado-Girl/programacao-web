import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcMediaComponent } from './calc-media/calc-media.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceSegComponent } from './apolice-seg/apolice-seg.component';
import { ConvTempComponent } from './conv-temp/conv-temp.component';
import { CalcImcComponent } from './calc-imc/calc-imc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CalcMediaComponent,
    CalculadoraComponent,
    ApoliceSegComponent,
    ConvTempComponent,
    CalcImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
