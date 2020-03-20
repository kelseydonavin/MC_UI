import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from 'src/app/homepage/homepage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreatePageModule { }
