import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';

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
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
