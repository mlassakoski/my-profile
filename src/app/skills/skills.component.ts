import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from 'app/animations/index';
import { frontend } from 'app/skills/front-end';
import { backend } from 'app/skills/back-end';
import { database } from 'app/skills/database';

@Component({
  selector: 'mlassakoski-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': 'true' }
})
export class SkillsComponent implements OnInit {

  public skills = [frontend, backend, database];

  constructor() { }

  ngOnInit() {
  }

}
