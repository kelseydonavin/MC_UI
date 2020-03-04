import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageModule } from './homepage/homepage.module';
import { PlayerPageModule } from './player-page/player-page.module';
import { ServerPageModule } from './server-page/server-page.module';
import { MetricsPageModule } from './metrics-page/metrics-page.module';
import { CreateLoginPageModule } from './create-login-page/create-login-page.module';
import { CreatePageModule } from './create-login-page/create-page/create-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    ServerPageModule,
    PlayerPageModule,
    MetricsPageModule,
    CreateLoginPageModule,
    CreatePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
