import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { HomepageModule } from './homepage/homepage.module';
import { PlayerPageModule } from './player-page/player-page.module';
import { ServerPageModule } from './server-page/server-page.module';
import { MetricsPageModule } from './metrics-page/metrics-page.module';
import { CreateLoginPageModule } from './create-login-page/create-login-page.module';
import { CreatePageModule } from './create-login-page/create-page/create-page.module';

import { HttpClientModule } from '@angular/common/http';  // This is so we can use get, post, put, delete etc...
import { RestService } from './API/rest.service'    // import RestService


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
    PlayerPageModule,
    MetricsPageModule,
    CreateLoginPageModule,
    CreatePageModule,
    HttpClientModule
  ],
  providers: [RestService], // Provides service, ie http client stuff. 
                            // This is so it doesnt treat it like a component, rather a service.
  bootstrap: [AppComponent]
})
export class AppModule { }
