import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./welcome-page/welcome-page.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'introduction-page',
    loadChildren: () =>
      import('./introduction-page/introduction-page.module').then(m => m.IntroductionPageModule)
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'yout-policy',
    loadChildren: () =>
      import('./yout-policy/yout-policy.module').then(m => m.YoutPolicyModule)
  }, 
  {
    path: 'underconstraction',
    loadChildren: () =>
      import('./underconstraction/underconstraction.module').then(m => m.UnderconstractionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
