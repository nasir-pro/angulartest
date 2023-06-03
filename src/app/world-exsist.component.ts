import { Component } from '@angular/core';

@Component({
  selector: 'app-world-exsist',
  template: '<h1>{{title}}</h1>',
  styles:
  [`
    h1{
      color: blue;
    }`
  ]

})

export class WorldExsistComponent {
  title = 'World Exsist!';
}
