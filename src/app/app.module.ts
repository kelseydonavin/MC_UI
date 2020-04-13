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
import { UniqueMetricPageComponent } from './unique-metric-page/unique-metric-page.component';

import { HomepageModule } from './homepage/homepage.module';
import { PlayerPageModule } from './player-page/player-page.module';
import { ServerPageModule } from './server-page/server-page.module';
import { MetricsPageModule } from './metrics-page/metrics-page.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ExampleUsersComponent } from './example-users/example-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    CreateLoginPageComponent,
    PlayerPageComponent,
    ServerPageComponent,
    MetricsPageComponent,
    HomepageComponent,
    ExampleUsersComponent,
    UniqueMetricPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
