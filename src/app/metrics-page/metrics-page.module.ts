
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsPageComponent } from './metrics-page.component';
import { HomepageModule } from '../homepage/homepage.module';

@NgModule({
  declarations: [
    MetricsPageComponent
  ],
  imports: [
    CommonModule,
    HomepageModule
  ],
  exports: [
    MetricsPageComponent
  ]
})
export class MetricsPageModule { }
