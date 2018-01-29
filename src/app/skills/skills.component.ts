import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from 'app/animations/index';

@Component({
  selector: 'mlassakoski-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': 'true' }
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
