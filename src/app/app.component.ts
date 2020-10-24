import { Component } from '@angular/core';
import { NODES } from './tree/nodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tree view';

  nodes = NODES;
}

