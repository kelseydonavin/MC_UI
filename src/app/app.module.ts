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
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ExampleUsersComponent } from './example-users/example-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleUsersComponent
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
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
