import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizModel } from '../models/quiz-model';
import { QuizListModel } from '../models/response_models/quiz-list-model';
import { QuizDetailsModel } from '../models/response_models/quiz-details-models';
import { LeaderBoardModel } from '../models/response_models/leaderboard-model';
import { UserModel } from '../models/response_models/user-model';
import { environment } from '../env';
import { AuthentificationService } from 'src/app/users/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http: HttpClient, private authservice: AuthentificationService) { }

  accessToken: any = localStorage.getItem("access-token");
  id: any = localStorage.getItem("id");
  getQuizList() {
    console.log(this.accessToken)
    const headers = { 'Authorization': 'Bearer ' + this.accessToken }
    return this.http.get<QuizListModel[]>("http://localhost:8081/Quiz/getQuizList/" + this.id, { headers })
  }

  getQuizDetails(id: string) {
    const headers = { 'Authorization': 'Bearer ' + this.accessToken }
    return this.http.get<QuizDetailsModel>("http://localhost:8081/personalQuiz/getPersonalQuiz/" + this.id + "/" + id, { headers });
  }

  passQuiz(quizId: string, score: number) {
    const headers = { 'Authorization': 'Bearer ' + this.accessToken }
    return this.http.post("http://localhost:8081/personalQuiz/passQuiz", { userId: this.id, quizId: quizId, score: score }, { headers })
  }

  createQuiz(quiz: any) {
    const headers = { 'Authorization': 'Bearer ' + this.accessToken }
    return this.http.post("http://localhost:8081/Quiz/createQuiz", quiz, { headers })
  }

  deleteQuiz(quizId: string) {
    const headers = { 'Authorization': 'Bearer ' + this.accessToken }
    return this.http.delete("http://localhost:8081/Quiz/deleteQuiz/" + quizId, { responseType: "text", headers });
  }

  getLeaderBoard(quizId: string) {
    const headers = { 'Authorization': 'Bearer ' + this.accessToken }
    return this.http.get<LeaderBoardModel[]>("http://localhost:8081/personalQuiz/leaderBoard/" + quizId, { headers });
  }

  payQuiz(payment: any, stripe: any) {
    const headers = { 'Authorization': 'Bearer ' + this.accessToken }
    this.http
      .post(`http://localhost:8081/payment/payment`, payment, { headers })
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }
}
