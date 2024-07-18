import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event, EventCategory } from '../models/event.models';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl = 'http://localhost:8089/api/events'; 

  constructor(private http: HttpClient) { }

  getApprovedEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/approved`);
  }

  getNotApprovedEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/notApproved`);
  }

  addEvent(event: Event, userId: number): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/addEvent/${userId}`, event);
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/all`);
  }

  getPersonalEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/personalEvents`);
  }

  deleteEvent(eventId: number): Observable<Event> {
    return this.http.delete<Event>(`${this.baseUrl}/delete/${eventId}`);
  }

  approuveEvent(eventId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/approve/${eventId}`, {});
  }

  getEventsByCategoryAdmin(categories: EventCategory[]): Observable<Event[]> {
    return this.http.post<Event[]>(`${this.baseUrl}/categoryAdmin`, categories);
  }

  getRemainingPlaces(eventId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/remaining-places/${eventId}`);
  }

  getCurrentUser(){
    return {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com",
      "phoneNum": 1234567890,
      "role": {
          "idRole": 1,
          "name": "ADMIN"
      },
    }
  }
}
