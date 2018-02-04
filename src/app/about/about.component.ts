import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'app/animations/index';
import { single } from './data';

@Component({
  selector: 'mlassakoski-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': 'true' }
})
export class AboutComponent implements OnInit {

  // options
  public single: any[] = [];
  public view: any[] = [700, 300];
  public showYAxis = true;
  public showGridLines = false;
  public scheme = 'aqua';

  constructor() {
    this.buildView();
    Object.assign(this, { single });
  }

  ngOnInit() {}
  onResize(event) {
    this.buildView();
  }

  buildView() {
    const size = window.screen.width;

    if (size > 1024) {
      this.view = [700];
    }
    if (size <= 1024) {
      this.view = [size - 220];
    }
    if (size <= 768) {
      this.view = [size - 150];
    }
    if (size <= 600) {
      this.view = [size - 120];
    }
    if (size <= 412) {
      this.view = [size - 80];
    }
  }
}
