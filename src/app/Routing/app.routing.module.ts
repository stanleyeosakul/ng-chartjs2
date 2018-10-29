import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBarChartComponent } from '../Chart/components/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from '../Chart/components/my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from '../Chart/components/my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from '../Chart/components/my-pie-chart/my-pie-chart.component';

const routes: Routes = [
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: '**', component: MyBarChartComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
