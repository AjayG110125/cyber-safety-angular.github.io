import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutPolicyComponent } from './yout-policy.component';

const routes: Routes = [
  { path: '', component: YoutPolicyComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutPolicyRoutingModule { }
