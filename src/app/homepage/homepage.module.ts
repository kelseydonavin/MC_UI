import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';



@NgModule({
  declarations: [HomepageComponent, MenuComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
