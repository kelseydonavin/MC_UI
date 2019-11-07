import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { PlayerPageComponent } from './player-page/player-page.component';
import { ServerPageComponent } from './server-page/server-page.component';
import { MetricsPageComponent } from './metrics-page/metrics-page.component';
import { CreateLoginPageComponent } from './create-login-page/create-login-page.component';
import { CreatePageComponent} from './create-login-page/create-page/create-page.component';

const routes: Routes = [
  {
    // TODO: remove when Login logic is set up
    path: 'home',
    component: HomepageComponent
  },
  {
    // TODO: remove when menu logic is set up
    path: 'metrics',
    component: MetricsPageComponent
  },
  {
    // TODO: remove when menu logic is set up
    path: 'create-login',
    component: CreateLoginPageComponent
  },

  {
    // TODO: remove when menu logic is set up
    path: 'create',
    component: CreatePageComponent
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
    component: HomepageComponent
  }, 
  {
    path: '**',
    component: HomepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }