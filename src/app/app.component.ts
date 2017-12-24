import { Component } from '@angular/core';

@Component({
  selector: 'mlassakoski-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu = [
    {
      name: 'Home',
      icon: 'home',
      url: '/home'
    },
    {
      name: 'About Me',
      icon: 'home',
      url: '/about-me'
    },
    {
      name: 'Skills',
      icon: 'home',
      url: '/skills'
    }
  ];

  constructor() { }


}