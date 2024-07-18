import { Component, Input } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { LeaderBoardModel } from '../models/response_models/leaderboard-model';
import { UserModel } from '../models/response_models/user-model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  @Input() quizId!: string;

  isloading: boolean = true;
  leaderboard!: LeaderBoardModel[];
  constructor(private service: QuizServiceService) { };

  ngOnInit() {
    this.service.getLeaderBoard(this.quizId).subscribe(
      (value) => {
        this.leaderboard = value; console.log(this.leaderboard);
        this.isloading = false;
      }

    )
  }

}
