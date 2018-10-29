import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartSelectorComponent } from '../Shared/chart-selector/chart-selector.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ChartSelectorComponent
  ],
  declarations: [
    ChartSelectorComponent
  ]
})
export class SharedModule { }
