import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiechartComponent } from './piechart/piechart.component';
import { TablerosComponent } from './tableros.component';
import { BarchartComponent } from './barchart/barchart.component';
import { TablerosRoutingModule } from './tableros.routes';



@NgModule({
  declarations: [
    PiechartComponent, 
    TablerosComponent, 
    BarchartComponent],
  imports: [
    CommonModule,
    TablerosRoutingModule
  ]
})
export class TablerosModule { }
