import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDefaultComponent } from './quiz-default/quiz-default.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { PassQuizComponent } from './pass-quiz/pass-quiz.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CancelPaytementComponent } from './cancel-paytement/cancel-paytement.component';
import { ValidatePaytementComponent } from './validate-paytement/validate-paytement.component';

const routes: Routes = [
  { path: '', component: QuizListComponent },
  { path: 'details/:id', component: QuizDetailsComponent },
  { path: 'pass-quiz', component: PassQuizComponent },
  { path: 'createQuiz', component: CreateQuizComponent },
  { path: 'editQuiz/:id', component: EditQuizComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cancel', component: CancelPaytementComponent },
  { path: 'success', component: ValidatePaytementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }

