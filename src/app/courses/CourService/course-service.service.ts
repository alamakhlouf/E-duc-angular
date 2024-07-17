import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  constructor(private http:HttpClient) {}
  getAllCour(id:number,from:number,size:number,key:string){
let params = new HttpParams()
      .set('from', from.toString())
      .set('size', size.toString())
      .set('key', key);
    return this.http.get<any[]>(`http://localhost:8080/cours/getAllcour/${id}`, { params });
  }
  getCour(from:number,size:number){
    let params = new HttpParams()
          .set('from', from.toString())
          .set('size', size.toString())
        return this.http.get<any[]>('http://localhost:8080/cours/getCour', { params });
      }

      addCour(cour:any){
        return this.http.post('http://localhost:8080/cours/add-cour',cour);
      }
}
