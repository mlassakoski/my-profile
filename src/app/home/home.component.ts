import { Component, OnInit } from '@angular/core';
import { TeximateOptions, TeximateHover, TeximateOrder } from 'ng-teximate';
import { fadeInAnimation } from 'app/animations/index';

@Component({
  selector: 'mlassakoski-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': 'true' }
})
export class HomeComponent implements OnInit {
  public effectOptions: TeximateOptions;
  public hoverOptions: TeximateHover;
  public isOpen = true;

  constructor() {}

  ngOnInit() {
    this.initTextAnimate();
  }

  private initTextAnimate() {
    this.effectOptions = {
      type: 'letter',
      animation: { name: 'rubberBand', duration: 1000 },
      letter: { type: TeximateOrder.SHUFFLE, delay: 0 }
    };

    this.hoverOptions = {
      type: 'letter',
      in: 'rubberBand'
    };
  }

  swapSaber() {
    this.isOpen = !this.isOpen;
  }
}
