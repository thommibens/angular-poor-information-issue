import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc';

  selectedElement: string;
  elements: string[] = [
    'test1',
    'test2',
    'test3'
  ];

}
