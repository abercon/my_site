import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomePageComponent } from "./welcome-page/welcome-page.component"

const routes: Routes = [
  { path: '', component: WelcomePageComponent}
  ]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

