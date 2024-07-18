import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ForumModule } from './forum/forum.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ForumEditComponent } from './forum/forum-edit/forum-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ForumCreateComponent } from './forum/forum-create/forum-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForumDeleteComponent } from './forum/forum-delete/forum-delete.component';
import { ForumAnswerComponent } from './forum/forum-answer/forum-answer.component';
import { ForumService } from './forum/forum.service';


@NgModule({
  declarations: [
    AppComponent,
    ForumCreateComponent,
    ForumDeleteComponent,
    ForumAnswerComponent,
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, 
    NgxPaginationModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
   

  ],
    providers: [ForumService],
    bootstrap: [AppComponent]
  })
export class AppModule { }
