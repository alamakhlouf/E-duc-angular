import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAllCategory(from: number, size: number, key: string) {
    let params = new HttpParams()
      .set('from', from.toString())
      .set('size', size.toString())
      .set('key', key);
    return this.http.get<any[]>('http://localhost:8081/category/getAllCategory', { params });
  }
  getAllCat() {
    return this.http.get<any>('http://localhost:8081/category/getAllCat');
  }
  getCatgoryById(id: number) {
    return this.http.get<any>(`http://localhost:8081/category/get-category/${id}`);
  }
  addCategory(category: any) {
    return this.http.post('http://localhost:8081/category/add-category', category);
  }
  deleteCategory(id: number) {
    return this.http.delete(`http://localhost:8081/category/delete-category/${id}`);
  }
  updateCategory(category: any, id: number) {
    return this.http.put(`http://localhost:8081/category/update-category/${id}`, category)
  }
}
