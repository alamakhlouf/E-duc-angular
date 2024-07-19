import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { Forum } from '../forum.model';
import { Router } from '@angular/router'; // Importez Router depuis @angular/router
import { MatDialog } from '@angular/material/dialog';
import { ForumEditComponent } from 'src/app/forum/forum-edit/forum-edit.component';
import { ForumCreateComponent } from 'src/app/forum/forum-create/forum-create.component';
import { ForumDeleteComponent } from 'src/app/forum/forum-delete/forum-delete.component';
import { ForumAnswerComponent } from 'src/app/forum/forum-answer/forum-answer.component';
import { Answer } from '../forum.model';



@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss']
})



export class ForumListComponent implements OnInit {
  forums: Forum[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  searchTitle: string = '';
  selectedForum: Forum | null = null;
  newAnswer: Answer | null = null;



  constructor(private forumService: ForumService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadForums();
  }

  loadForums(): void {
    this.forumService.getAllForums()
      .subscribe(
        forums => {
          this.forums = forums;
          console.log('Forums received:', this.forums);
        },
        error => {
          console.error('Error fetching forums', error);
        }
      );
  }

  openCreateForumDialog(): void {
    const dialogRef = this.dialog.open(ForumCreateComponent, {
      width: '600px' // Définir la largeur du modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result); // Afficher les données sauvegardées dans le forum
      // Actualiser la liste des forums ou effectuer d'autres actions si nécessaire
    });
  }


  openEditDialog(forum: Forum): void {
    const dialogRef = this.dialog.open(ForumEditComponent, {
      width: '600px',
      data: { forum }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadForums();
      }
    });
  }

  deleteForum(forum: Forum): void {
    const dialogRef = this.dialog.open(ForumDeleteComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.forumService.deleteForum(forum.idNews).subscribe(
          () => {
            this.showSuccessToast(); // Example for showing a success toast
            this.loadForums(); // Reload forums after deletion
          },
          error => {
            console.error('Error deleting forum', error);
            this.showErrorToast(); // Example for showing an error toast
          }
        );
      }
    });
  }




  searchForums(): void {
    this.forumService.searchForumsByTitle(this.searchTitle)
      .subscribe(
        forums => {
          this.forums = forums;
          console.log('Search results:', this.forums);
        },
        error => {
          console.error('Error searching forums', error);
        }
      );
  }


  showSuccessToast(): void {
  }

  showErrorToast(): void {
  }



  likeForum(forum: Forum): void {
    this.forumService.likeForum(forum.idNews)
      .subscribe(
        updatedForum => {
          forum.likeCount = updatedForum.likeCount; // Update local like count
          this.showSuccessToast(); // Example for showing a success toast
        },
        error => {
          console.error('Error liking forum', error);
          this.showErrorToast(); // Example for showing an error toast
        }
      );
  }


  showForumDetails(forum: Forum) {
    forum.answer = [];

    this.forumService.getAnswerById(forum.idNews).subscribe((detailedForum) => {
      forum.answer = detailedForum.answer;
    }, (error) => {
      console.error(`Error loading answers for forum ${forum.idNews}:`, error);
    });
  }



  addAnswerToForum(answer: Answer) {
    if (this.selectedForum) {
      this.selectedForum.answer.push(answer);
    }
  }


  openAddAnswerDialog(forumId: number): void {
    const dialogRef = this.dialog.open(ForumAnswerComponent, {
      width: '400px',
      data: { forumId: forumId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadForums(); // Reload forums if a new answer was added
      }
    });
  }
}
