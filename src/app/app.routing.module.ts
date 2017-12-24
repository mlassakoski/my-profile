import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: HomeComponent,
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
