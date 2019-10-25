import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLoginPageComponent } from './create-login-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { HomepageModule } from '../homepage/homepage.module';

@NgModule({
  declarations: [CreateLoginPageComponent, CreatePageComponent],
  imports: [
    CommonModule,
    HomepageModule
  ],
  exports: [CreateLoginPageComponent, CreatePageComponent]
})
export class CreateLoginPageModule { }
