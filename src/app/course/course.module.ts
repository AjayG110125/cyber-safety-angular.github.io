import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatIconModule
  ],
  exports: [CourseComponent]
})
export class CourseModule { }
