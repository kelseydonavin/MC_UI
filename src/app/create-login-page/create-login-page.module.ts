import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLoginPageComponent } from './create-login-page.component';
import { CreatePageComponent } from './create-page/create-page.component';



@NgModule({
  declarations: [CreateLoginPageComponent, CreatePageComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateLoginPageComponent, CreatePageComponent]
})
export class CreateLoginPageModule { }
