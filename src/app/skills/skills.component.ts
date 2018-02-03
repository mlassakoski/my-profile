import { SkillsService } from './skills.service';
import { IskillGroup } from 'app/skills/model/Iskill-group';
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

  public skills: IskillGroup[] = [];

  constructor(private _service: SkillsService) { }

  ngOnInit() {
    this.skills = this._service.getSkills();
  }

}
