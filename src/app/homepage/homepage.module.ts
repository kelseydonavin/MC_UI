import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [HomepageComponent, StatisticsComponent],

  imports: [
    CommonModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
