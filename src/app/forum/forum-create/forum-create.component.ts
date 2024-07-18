import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ForumService } from '../forum.service';
import { Forum } from '../forum.model';
import { MatDialog } from '@angular/material/dialog';
import { ImageUploadService } from '../image.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-forum-create',
  templateUrl: './forum-create.component.html',
  styleUrls: ['./forum-create.component.scss']
})
export class ForumCreateComponent implements OnInit {
onFileChange($event: Event) {
throw new Error('Method not implemented.');
}
  forumForm: FormGroup;
  selectedFile: File | null = null;
  today: string;

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,

    private imageUploadService: ImageUploadService,
    public dialogRef: MatDialogRef<ForumCreateComponent>
  ) {
    this.today = new Date().toISOString().split('T')[0];
    this.forumForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateCreation: [this.today],
      postedBy: ['User'],
      likeCount: [0],
      viewCount: [0],
      answer: [[]],
      imageUrl: ''

    });
  }

  ngOnInit(): void {}

  saveForum(): void {
    if (this.forumForm.valid) {
      const newForum: Forum = {
        idNews: 0,
        title: this.forumForm.value.title,
        description: this.forumForm.value.description,
        dateCreation: new Date(),
        postedBy: 'User',
        likeCount: 0,
        viewCount: 0,
        answer: [],
        imageUrl: ''
      };

      this.forumService.addForum(newForum).subscribe(
        () => {
          this.snackBar.open('Forum created successfully!', 'Close', {
            duration: 3000,
            panelClass: ['custom-snackbar']
          });
          this.dialogRef.close(true);
        },
        error => {
          this.snackBar.open('Error creating forum. Please try again.', 'Close', {
            duration: 3000,
            panelClass: ['custom-snackbar-error']
          });
          console.error('Error creating forum', error);
        }
      );
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
