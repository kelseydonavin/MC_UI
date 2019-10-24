import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerPageComponent } from './server-page.component';
import { HomepageModule } from '../homepage/homepage.module';


@NgModule({
  declarations: [ServerPageComponent],
  imports: [
    CommonModule,
    HomepageModule
  ],
  exports: [ServerPageComponent]
})
export class ServerPageModule { }
