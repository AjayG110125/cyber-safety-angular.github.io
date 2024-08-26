import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutPolicyRoutingModule } from './yout-policy-routing.module';
import { YoutPolicyComponent } from './yout-policy.component';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [YoutPolicyComponent],
  imports: [
    CommonModule,
    YoutPolicyRoutingModule
  ]
})
export class YoutPolicyModule { }
