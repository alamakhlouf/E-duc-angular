import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDefaultComponent } from './course-default/course-default.component';
import { CreateCourComponent } from './CourCrud/create-cour/create-cour.component';
import { CreateChapitreComponent } from './ChapitreCrud/create-chapitre/create-chapitre.component';
import { ChapitreListComponent } from './ChapitreCrud/chapitre-list/chapitre-list.component';
import { ChapitreDetailsComponent } from './ChapitreCrud/chapitre-details/chapitre-details.component';
import { UpdateChapitreComponent } from './ChapitreCrud/update-chapitre/update-chapitre.component';

const routes: Routes = [
  { path: '', component: CourseDefaultComponent },
  {path : 'create-cour', component:CreateCourComponent},
  {path : 'create-chapitre/:id', component:CreateChapitreComponent},
  {path : 'chapitre/:id',component:ChapitreListComponent},
  {path : 'chapitreDetails/:id',component:ChapitreDetailsComponent},
  {path : 'updateChapitre/:courId/:id',component:UpdateChapitreComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {

}
