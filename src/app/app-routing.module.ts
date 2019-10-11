import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'course-offered', loadChildren: './course-offered/course-offered.module#CourseOfferedPageModule' },
  { path: 'course-personal', loadChildren: './course-personal/course-personal.module#CoursePersonalPageModule' },
  { path: 'check-record', loadChildren: './check-record/check-record.module#CheckRecordPageModule' },
  { path: 'check-status', loadChildren: './check-status/check-status.module#CheckStatusPageModule' },  { path: 'course-detail', loadChildren: './course-detail/course-detail.module#CourseDetailPageModule' },
  { path: 'check-detail', loadChildren: './check-detail/check-detail.module#CheckDetailPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
