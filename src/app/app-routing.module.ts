import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component'
import { PlayerPageComponent } from './player-page/player-page.component';
import { ServerPageComponent } from './server-page/server-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    // TODO: remove when Login logic is set up
    path: 'home',
    component: HomepageComponent
  },
  {
    // TODO: remove when menu logic is set up
    path: 'player',
    component: PlayerPageComponent
  },
  {
    // TODO: remove when menu logic is set up
    path: 'server',
    component: ServerPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  }, 
  {
    path: '**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }