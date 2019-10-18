import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerPageComponent } from './server-page.component'


@NgModule({
  declarations: [ServerPageComponent],
  imports: [
    CommonModule
  ],
  exports: [ServerPageComponent]
})
export class ServerPageModule { }
