import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderconstractionRoutingModule } from './underconstraction-routing.module';
import { UnderconstractionComponent } from './underconstraction.component';


@NgModule({
  declarations: [UnderconstractionComponent],
  imports: [
    CommonModule,
    UnderconstractionRoutingModule
  ],
  exports: [UnderconstractionComponent]
})
export class UnderconstractionModule { }
