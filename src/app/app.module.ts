import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreatePageComponent } from './create-login-page/create-page/create-page.component';
import { CreateLoginPageComponent } from './create-login-page/create-login-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { ServerPageComponent } from './server-page/server-page.component';
import { MetricsPageComponent } from './metrics-page/metrics-page.component';

import { HomepageModule } from './homepage/homepage.module';
import { PlayerPageModule } from './player-page/player-page.module';
import { ServerPageModule } from './server-page/server-page.module';
import { MetricsPageModule } from './metrics-page/metrics-page.module';

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    CreateLoginPageComponent,
    HomepageComponent,
    PlayerPageComponent,
    ServerPageComponent,
    MetricsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
