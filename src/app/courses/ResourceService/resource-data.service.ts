import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceDataService {

  private apiUrl = 'http://localhost:8081/upload';
  private apiUrl2 = 'http://localhost:9191/image/upload/image';

  constructor(private http: HttpClient) { }

  uploadImage(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<string>(this.apiUrl, formData);
  }
  // Remplacez par l'URL de votre API

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<string>(this.apiUrl2, formData);
  }
  getFile(path: string) {
    return this.http.get<any[]>(`http://localhost:8081/download/${path}`);
  }
  getPdf(path: string): Observable<Blob> {
    return this.http.get(`http://localhost:8081/download/${path}`, { responseType: 'blob' });
  }
}
