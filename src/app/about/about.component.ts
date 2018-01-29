import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from './../animations/index';

@Component({
  selector: 'mlassakoski-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': 'true' }
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
