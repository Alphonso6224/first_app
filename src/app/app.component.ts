import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HomeComponent, RouterModule],
  template: `
    <h1>Default</h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
