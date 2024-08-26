import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderconstractionComponent } from './underconstraction.component';

const routes: Routes = [
  { path: '', component: UnderconstractionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnderconstractionRoutingModule { }
