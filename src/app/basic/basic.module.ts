import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { ChartsComponent } from './charts/charts.component';

//chart lab.
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
// import {HighchartsChartModule} from 'highcharts-angular'


@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    ChartModule,
    HighchartsChartModule
  ]
})
export class BasicModule { }
