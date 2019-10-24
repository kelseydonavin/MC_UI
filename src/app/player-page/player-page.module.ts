import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPageComponent } from './player-page.component';
import { HomepageModule } from '../homepage/homepage.module';

@NgModule({
  declarations: [
    PlayerPageComponent
  ],
  imports: [
    CommonModule,
    HomepageModule
  ],
  exports: [
    PlayerPageComponent
  ]
})
export class PlayerPageModule { }
