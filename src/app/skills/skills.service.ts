import { Injectable } from '@angular/core';

import { frontend } from 'app/skills/front-end';
import { backend } from 'app/skills/back-end';
import { database } from 'app/skills/database';

@Injectable()
export class SkillsService {

  constructor() { }

  public getSkills() {
    return [
      {
        name: 'Front-end',
        skills: frontend
      },
      {
        name: 'Back-end',
        skills: backend
      },
      {
        name: 'Database',
        skills: database
      }
    ];
  }
}
