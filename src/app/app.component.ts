import { Component } from '@angular/core';
import { RestService } from './API/rest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Passing in Rest Service into constructor.
  // * Dependency injection - inject into any given class, any dependicies that you may have.
  // We have dependency to RestService so we are injecting RestService into AppComponent.
  constructor(api: RestService) {
    api.getTest();
  }

  title = 'angular-boostrap-aims';
}
