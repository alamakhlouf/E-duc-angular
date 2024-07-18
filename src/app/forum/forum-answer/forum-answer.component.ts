import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForumService } from '../forum.service';
import { Forum, Answer } from '../forum.model';



@Component({
  selector: 'app-forum-answer',
  templateUrl: './forum-answer.component.html',
  styleUrls: ['./forum-answer.component.scss']
})
export class ForumAnswerComponent {
  answerForm: FormGroup;

  
  constructor(
    private dialogRef: MatDialogRef<ForumAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private forumService: ForumService
  ) {
    this.answerForm = this.formBuilder.group({
      answerDescription: ['', Validators.required]
    });
  }
  

  saveAnswer() {
    if (this.answerForm.valid) {
      const newAnswer: Answer = {
        idAnswer: 0, 
        answerDescription: this.answerForm.value.answerDescription,
        userProfile: { username: 'current_user' } 
      };

      this.forumService.addAnswer(newAnswer).subscribe((response) => {
        
        this.dialogRef.close(response);
      }, (error) => {
        
        console.error('Error adding answer:', error);
      });
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
