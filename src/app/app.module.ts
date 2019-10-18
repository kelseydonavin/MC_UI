import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module'
import { HomepageModule } from './homepage/homepage.module';
import { PlayerPageModule } from './player-page/player-page.module';
import { ServerPageModule } from './server-page/server-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomepageModule,
    ServerPageModule,
    PlayerPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
