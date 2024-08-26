import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionPageRoutingModule } from './introduction-page-routing.module';
import { IntroductionPageComponent } from './introduction-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: IntroductionPageComponent }
];

@NgModule({
  declarations: [IntroductionPageComponent],
  imports: [
    CommonModule,
    IntroductionPageRoutingModule,
    FormsModule
  ],
  exports:[IntroductionPageComponent]
})
export class IntroductionPageModule { }
