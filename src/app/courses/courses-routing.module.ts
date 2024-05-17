import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDefaultComponent } from './course-default/course-default.component';

const routes: Routes = [
  { path: '', component: CourseDefaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
