import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForumService } from '../forum.service';
import { Forum } from '../forum.model';

@Component({
  selector: 'app-forum-edit',
  templateUrl: './forum-edit.component.html',
  styleUrls: ['./forum-edit.component.scss']
})
export class ForumEditComponent implements OnInit {
  forumForm: FormGroup;
  forum: Forum;

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService,
    public dialogRef: MatDialogRef<ForumEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.forum = data.forum;
    this.forumForm = this.fb.group({
      idNews: [this.forum.idNews],
      title: [this.forum.title, Validators.required],
      description: [this.forum.description, Validators.required]
      // Add other fields as needed
    });
  }

  ngOnInit(): void {}

  saveChanges(): void {
    if (this.forumForm.valid) {
      const formData = new FormData();
      formData.append('idNews', this.forumForm.value.idNews.toString());
      formData.append('title', this.forumForm.value.title);
      formData.append('description', this.forumForm.value.description);
      // Append other fields as needed

      this.forumService.updateForum(formData).subscribe(
        () => {
          this.dialogRef.close(true); // Close dialog on success
        },
        error => {
          console.error('Error updating forum', error);
          // Handle error, show message if needed
        }
      );
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
