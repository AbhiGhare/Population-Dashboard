import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceRoutingModule } from './advance-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { ChartsComponent } from './charts/charts.component';

//chart lab.
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { PopulationService } from '../worldData/population.service';

import {HttpClientModule} from '@angular/common/http';
import { ChartsServicesService } from '../worldData/charts-services.service';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdvanceRoutingModule,
    ChartModule,
    HighchartsChartModule,
    HttpClientModule
    
  ],
  providers: [PopulationService,ChartsServicesService],
})
export class AdvanceModule { }
