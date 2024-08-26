import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionPageComponent } from './introduction-page.component';

const routes: Routes = [
  { path: '', component: IntroductionPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionPageRoutingModule { }
