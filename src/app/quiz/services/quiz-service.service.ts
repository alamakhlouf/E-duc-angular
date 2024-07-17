import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizModel } from '../models/quiz-model';
import { QuizListModel } from '../models/response_models/quiz-list-model';
import { QuizDetailsModel } from '../models/response_models/quiz-details-models';
import { LeaderBoardModel } from '../models/response_models/leaderboard-model';
import { UserModel } from '../models/response_models/user-model';
import { environment } from '../env';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http: HttpClient) { }

  getQuizList() {
    return this.http.get<QuizListModel[]>("http://localhost:8081/Quiz/getQuizList/2")
  }

  getQuizDetails(id: string) {
    return this.http.get<QuizDetailsModel>("http://localhost:8081/personalQuiz/getPersonalQuiz/2/" + id);
  }

  passQuiz(quizId: string, score: number) {
    return this.http.post("http://localhost:8081/personalQuiz/passQuiz", { userId: 2, quizId: quizId, score: score })
  }

  createQuiz(quiz: any) {
    return this.http.post("http://localhost:8081/Quiz/createQuiz", quiz)
  }

  deleteQuiz(quizId: string) {
    return this.http.delete("http://localhost:8081/Quiz/deleteQuiz/" + quizId, { responseType: "text" });
  }

  getLeaderBoard(quizId: string) {
    return this.http.get<LeaderBoardModel[]>("http://localhost:8081/personalQuiz/leaderBoard/" + quizId);
  }

  payQuiz(payment: any, stripe: any) {
    // this is a normal http calls for a backend api
    this.http
      .post(`http://localhost:8081/payment/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }
}
