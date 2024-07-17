import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizDefaultComponent } from './quiz-default/quiz-default.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { PassQuizComponent } from './pass-quiz/pass-quiz.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditQuizComponent } from './edit-quiz/edit-quiz.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ValidatePaytementComponent } from './validate-paytement/validate-paytement.component';
import { CancelPaytementComponent } from './cancel-paytement/cancel-paytement.component';


@NgModule({
  declarations: [
    QuizDefaultComponent,
    QuizListComponent,
    QuizDetailsComponent,
    PassQuizComponent,
    CreateQuizComponent,
    EditQuizComponent,
    QuizCardComponent,
    LeaderboardComponent,
    ValidatePaytementComponent,
    CancelPaytementComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ]
})
export class QuizModule { }
