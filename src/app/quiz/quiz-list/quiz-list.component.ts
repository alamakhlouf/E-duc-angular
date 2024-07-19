import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { QuizListModel } from '../models/response_models/quiz-list-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent implements OnInit {
  quizList!: QuizListModel[];
  deleteCourseId!: string;
  isButtonClicked: boolean = false;
  role: any = localStorage.getItem("role")
  constructor(private quizService: QuizServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.quizService.getQuizList().subscribe((data) => (this.quizList = data));
  }

  goToDetails(id: string) {
    this.router.navigate([`../details/${id}`], { relativeTo: this.route });
  }

  goToCreateQuiz() {
    this.router.navigate([`../createQuiz`], { relativeTo: this.route });
  }

  editCourse(idQuiz: string) {
    console.log(`Editing course with id: ${idQuiz}`);
  }

  deleteCourse() {
    this.quizService.deleteQuiz(this.deleteCourseId).subscribe((response) => {
      this.quizService.getQuizList().subscribe((data) => {
        this.quizList = data;
        console.log(this.quizList);
      });
    });
    console.log(`Deleting course with id: ${this.deleteCourseId}`);
  }

  setDeleteCourseId(idQuiz: string) {
    console.log("Setting delete course ID to:", idQuiz);
    this.deleteCourseId = idQuiz;
  }
}
