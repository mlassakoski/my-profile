import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { SkillsComponent } from 'app/skills/skills.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about-me',
        component: AboutComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      { path: '**', redirectTo: '' }
    ],
    {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
