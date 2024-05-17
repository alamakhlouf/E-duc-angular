import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDefaultComponent } from './quiz-default/quiz-default.component';

const routes: Routes = [
  { path: '', component: QuizDefaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }

