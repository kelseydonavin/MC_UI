import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsPageComponent } from './metrics-page.component';



@NgModule({
  declarations: [MetricsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MetricsPageComponent]
})
export class MetricsPageModule { }
