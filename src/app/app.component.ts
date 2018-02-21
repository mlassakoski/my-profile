import { Component } from '@angular/core';

@Component({
  selector: 'mlassakoski-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public logoOvered = false;
  public menu = [
    {
      name: 'Home',
      icon: 'home',
      url: '/home'
    },
    {
      name: 'About Me',
      icon: 'person',
      url: '/about-me'
    },
    {
      name: 'Skills',
      icon: 'code',
      url: '/skills'
    }
  ];

  constructor() { }


}
