import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent {
  quizForm: FormGroup;
  questionForm: FormGroup;
  questions: any[] = [];
  id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private quizService: QuizServiceService,
  ) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      difficulty: ['', Validators.required]
    });

    this.questionForm = this.fb.group({
      nameQuestion: ['', Validators.required],
      responseList: this.fb.array([], Validators.required),
      correctResponse: [null, Validators.required]
    });

    this.addResponse();
    this.addResponse();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Assuming the route contains the quiz ID
    this.loadQuiz(this.id);
  }

  get questionResponses(): FormArray {
    return this.questionForm.get('responseList') as FormArray;
  }

  addResponse(): void {
    this.questionResponses.push(this.fb.control(''));
  }

  isQuestionFormValid(): boolean {
    const question = this.questionForm.value;
    question.responseList = question.responseList.filter((response: string) => response.trim() !== ''); // Remove empty responses

    return this.questionForm.valid && question.responseList.length > 1 && this.correctResponseControl.value !== null;
  }

  saveQuestion(): void {
    if (this.isQuestionFormValid()) {
      const question = this.questionForm.value;
      question.responseList = question.responseList.filter((response: string) => response.trim() !== ''); // Remove empty responses
      if (question.correctResponse !== null && question.responseList.length > 1) {
        question.responseList = question.responseList.map((response: string, index: number) => ({
          response,
          correctResponse: index === question.correctResponse
        }));
        this.questions.push(question);
        this.questionForm.reset();
        this.questionResponses.clear();
        this.addResponse();
        this.addResponse();
        const modalElement = document.getElementById('questionModal');
        if (modalElement) {
          //const modal = bootstrap.Modal.getInstance(modalElement);
          // if (modal) {
          //  modal.hide();
          //}
        }
      }
    }
  }

  saveQuiz(): void {
    if (this.quizForm.valid) {
      const quizData = {
        title: this.quizForm.value.title,
        difficulty: this.quizForm.value.difficulty,
        questions: this.questions
      };
      this.http.put(`your-api-url/quizzes/${this.id}`, quizData).subscribe(response => {
        console.log(response);
      });
    }
  }

  removeQuestion(index: number): void {
    this.questions.splice(index, 1);
  }

  get correctResponseControl(): FormControl {
    return this.questionForm.get('correctResponse') as FormControl;
  }

  loadQuiz(id: string): void {
    this.quizService.getQuizDetails(this.id).subscribe(data => {
      this.quizForm.patchValue({
        title: data.quiz.title,
        difficulty: data.quiz.difficulty
      });
      this.questions = data.quiz.questions;
    });
  }
}
