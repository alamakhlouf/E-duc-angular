import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumRoutingModule } from './forum-routing.module'; // Assurez-vous de l'importer correctement
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ForumEditComponent } from './forum-edit/forum-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForumDeleteComponent } from './forum-delete/forum-delete.component';
import { ForumCreateComponent } from './forum-create/forum-create.component';
import { ForumAnswerComponent } from './forum-answer/forum-answer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ForumListComponent,
    ForumEditComponent,
    ForumDeleteComponent,
    ForumCreateComponent,
    ForumAnswerComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule,
    NgxPaginationModule,
    ForumRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatSnackBarModule,



  ],
  exports: [ForumListComponent, ForumEditComponent]
})
export class ForumModule { }
