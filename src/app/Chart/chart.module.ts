import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { MyBarChartComponent } from './components/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './components/my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './components/my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './components/my-radar-chart/my-radar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyPieChartComponent,
    MyRadarChartComponent
  ]
})
export class ChartModule { }
