import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { slideInAnimation } from './reusable';

@Component({
  selector: 'app-root',
  animations: [ slideInAnimation ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
