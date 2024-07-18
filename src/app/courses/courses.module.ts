import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDefaultComponent } from './course-default/course-default.component';
import { CreateCourComponent } from './CourCrud/create-cour/create-cour.component';
import { ChapitreListComponent } from './ChapitreCrud/chapitre-list/chapitre-list.component';
import { CreateChapitreComponent } from './ChapitreCrud/create-chapitre/create-chapitre.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChapitreDetailsComponent } from './ChapitreCrud/chapitre-details/chapitre-details.component';
import { UpdateChapitreComponent } from './ChapitreCrud/update-chapitre/update-chapitre.component';



@NgModule({
  declarations: [
    CourseDefaultComponent,
    CreateCourComponent,
    ChapitreListComponent,
    CreateChapitreComponent,
    ChapitreDetailsComponent,
    UpdateChapitreComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoursesModule { }
