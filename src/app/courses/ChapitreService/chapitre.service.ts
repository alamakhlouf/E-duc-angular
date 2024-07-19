import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  constructor(private http: HttpClient) { }
  getAllCour(id: number) {
    return this.http.get<any[]>(`http://localhost:8081/chapitre/getAllChapitre/${id}`);
  }
  addChapitre(id: number, chapitre: any) {
    return this.http.post(`http://localhost:8081/chapitre/addChapitre/${id}`, chapitre);
  }
  addChapitreAssignment(id: number, userId: string): Observable<any> {
    const body = {
      chapitreId: id,
      userId: userId
    };
    return this.http.post('http://localhost:8081/chapitre/addChapitreAssignment', body);
  }
  updateChapitre(id: number, chapitre: any) {
    return this.http.put(`http://localhost:8081/chapitre/updateChapitre/${id}`, chapitre);
  }
  deleteChapitre(id: number) {
    return this.http.delete(`http://localhost:8081/chapitre/deleteChapitre/${id}`);
  }
  getChapitreDetails(id: number) {
    return this.http.get<any[]>(`http://localhost:8081/chapitre/getchapitreById/${id}`);
  }
  checkChapitreStatus(chapitreId: number, userId: string): Observable<string> {
    return this.http.get(`http://localhost:8081/chapitre/getStatus/${chapitreId}/${userId}`, { responseType: 'text' });
  }
}
