import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Forum, Answer } from './forum.model';


@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }


  getAllForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.apiUrl}/getAllNewsForum`);
  }


  getForumById(idNews: string): Observable<Forum> {
    const url = `${this.apiUrl}/getAllNewsForum/${idNews}`;
    return this.http.get<Forum>(url);
  }


  updateForum(formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateNewsForum`, formData);
  }


  deleteForum(forumId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteNewsForumById/${forumId}`);
  }

  addForum(newForum: Forum): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addNewsForum`, newForum);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('An error occurred while adding the forum.');
  }


  searchForumsByTitle(title: string): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.apiUrl}/searchNewsForumByTitle/${title}`);
  }

  likeForum(forumId: number): Observable<Forum> {
    return this.http.post<Forum>(`${this.apiUrl}/likeNewsForum/${forumId}`, {});
  }


  addAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(`${this.apiUrl}/addAnswer`, answer);
  }
  getAnswerById(forumId: number): Observable<Forum> {
    return this.http.get<Forum>(`${this.apiUrl}/getAllAnswer/${forumId}`);
  }

}
