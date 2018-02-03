import { Injectable } from '@angular/core';

import { frontend } from './model/front-end';
import { backend } from './/model/back-end';
import { database } from './/model/database';
import { Iskill } from './/model/Iskill';

@Injectable()
export class SkillsService {

  constructor() { }

  public getSkills(): Iskill[] {
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
