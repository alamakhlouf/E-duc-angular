import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent {
  @Input() quiz: any;
  @Input() hasQuiz!: boolean;
  @Output() deleteQuiz = new EventEmitter<number>();

  goToDetails(idQuiz: number) {
    // Add your navigation logic here
  }

  setDeleteCourseId(idQuiz: number) {
    this.deleteQuiz.emit(idQuiz);
  }
}
