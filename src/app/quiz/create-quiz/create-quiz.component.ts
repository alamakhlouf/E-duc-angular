import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { QuizServiceService } from '../services/quiz-service.service';

declare var bootstrap: any;

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {
  @ViewChild('questionModal') questionModal!: ElementRef;
  quizForm: FormGroup;
  questionForm: FormGroup;
  questions: any[] = [];
  id: any = 0;

  constructor(private fb: FormBuilder, private quizService: QuizServiceService) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      difficulty: ['', Validators.required],
      description: ['', Validators.required],
      certified: [false],
      price: [0, [Validators.required, Validators.min(0)]]
    });

    this.questionForm = this.fb.group({
      nameQuestion: ['', Validators.required],
      responseList: this.fb.array([], Validators.required),
      correctResponse: [null, Validators.required]
    });

    this.addResponse();
    this.addResponse();
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
        this.id = 0;
        this.addResponse();
        this.addResponse();

        // Ensure the modal remains open and the background is interactive
        setTimeout(() => {
          const modalElement = this.questionModal.nativeElement;
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          if (modalInstance) {
            modalInstance.handleUpdate();
          }
        }, 0);
      }
    }
  }

  saveQuiz(): void {
    if (this.quizForm.valid && this.questions.length >= 1) {
      const quizData = {
        title: this.quizForm.value.title,
        difficulty: this.quizForm.value.difficulty,
        description: this.quizForm.value.description,
        certified: this.quizForm.value.certified,
        price: this.quizForm.value.price,
        questions: this.questions
      };
      this.quizService.createQuiz(quizData).subscribe(response => {
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
}
