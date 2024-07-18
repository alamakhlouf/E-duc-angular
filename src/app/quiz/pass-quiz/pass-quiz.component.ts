import { Component, Input } from '@angular/core';
import { QuizDetailsModel } from '../models/response_models/quiz-details-models';
import { Questions } from '../models/questions-model';
import { ResponseQ } from '../models/responseQ-model';
import { Router } from '@angular/router';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-pass-quiz',
  templateUrl: './pass-quiz.component.html',
  styleUrls: ['./pass-quiz.component.scss']
})
export class PassQuizComponent {
  quizDetails!: QuizDetailsModel;
  currentQuestionIndex: number = 0;
  currentQuestion!: Questions;
  score: number = 0;
  selectedResponse!: ResponseQ;
  answeredQuestions: { [key: number]: ResponseQ } = {};

  constructor(private router: Router, private personalQuizService: QuizServiceService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const state = navigation.extras.state as { [key: string]: any };
      this.quizDetails = state['quizDetails'];
    }
    console.log(this.quizDetails);
  }

  ngOnInit(): void {
    if (this.quizDetails) {
      this.startQuiz();
    }
  }

  startQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.currentQuestion = this.quizDetails.quiz.questions[this.currentQuestionIndex];
  }

  selectAnswer(response: ResponseQ): void {
    this.selectedResponse = response;
    this.answeredQuestions[this.currentQuestionIndex] = response;
    if (response.correctResponse) {
      this.score++;
    }
    setTimeout(() => this.nextQuestion(), 500);
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.quizDetails.quiz.questions.length) {
      this.currentQuestion = this.quizDetails.quiz.questions[this.currentQuestionIndex];
      this.selectedResponse = this.answeredQuestions[this.currentQuestionIndex];
    } else {
      this.personalQuizService.passQuiz(this.quizDetails.quiz.idQuiz, this.score).subscribe(
        () => console.log(" done")
      );
      this.currentQuestion = undefined!;
    }
  }

  navigateToQuestion(index: number): void {
    this.currentQuestionIndex = index;
    this.currentQuestion = this.quizDetails.quiz.questions[this.currentQuestionIndex];
    this.selectedResponse = this.answeredQuestions[this.currentQuestionIndex];
  }

  isAnswered(index: number): boolean {
    return this.answeredQuestions.hasOwnProperty(index);
  }

  isSelectedResponse(response: ResponseQ): boolean {
    return this.selectedResponse === response;
  }

  goHome(): void {
    this.router.navigate(["quizz"]);
  }
}
