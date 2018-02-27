import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/animations/index';
import { skills } from './data';

@Component({
  selector: 'mlassakoski-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': 'true' }
})
export class AboutComponent implements OnInit {

  public skills = skills;

  constructor() {
  }

  ngOnInit() {}

}
