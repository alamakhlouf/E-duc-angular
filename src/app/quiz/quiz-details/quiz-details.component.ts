import { Component } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizDetailsModel } from '../models/response_models/quiz-details-models';
import { environment } from '../env';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent {

  constructor(private quizService: QuizServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }
  id!: string;
  quizDetails!: QuizDetailsModel;
  stripePromise = loadStripe(environment.stripe);
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);

    this.quizService.getQuizDetails(this.id).subscribe(
      (data) => this.quizDetails = data

    )
  }
  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      quizId: this.quizDetails.id,
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: this.quizDetails.quiz.price * 10,
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;
    this.quizService.payQuiz(payment, stripe)



  }

  click() {
    if (this.quizDetails.score == -1)
      this.pay()
    else
      this.startQuiz()

  }

  startQuiz(): void {
    console.log();
    ("AAAAAAAAAAAAa")
    this.router.navigate(['/pass-quiz'], { state: { quizDetails: this.quizDetails } });
  }

}
