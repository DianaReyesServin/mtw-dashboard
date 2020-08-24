import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiechartComponent } from './piechart/piechart.component';
import { TablerosComponent } from './tableros.component';
import { BarchartComponent } from './barchart/barchart.component';
import { TablerosRoutingModule } from './tableros.routes';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PiechartComponent, 
    TablerosComponent, 
    BarchartComponent],
  imports: [
    FormsModule,
    NgSelectModule,
    CommonModule,
    ChartsModule,   
    TablerosRoutingModule
  ]
})
export class TablerosModule { }
