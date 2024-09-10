import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcMediaComponent } from './calc-media/calc-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceSegComponent } from './apolice-seg/apolice-seg.component';
import { ConvTempComponent } from './conv-temp/conv-temp.component';
import { CalcImcComponent } from './calc-imc/calc-imc.component';

const routes: Routes = [
     { path : 'calc-media', component : CalcMediaComponent },
     { path : 'calculadora', component : CalculadoraComponent },
     { path : 'apolice-seg', component : ApoliceSegComponent },
     { path : 'conv-temp', component : ConvTempComponent },
     { path : 'calc-imc', component : CalcImcComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
