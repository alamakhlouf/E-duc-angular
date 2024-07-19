import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event, EventCategory } from '../models/event.models';
import { AuthentificationService } from 'src/app/users/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl = 'http://localhost:8081/api/events';

  constructor(private http: HttpClient, private authservice: AuthentificationService) { }

  getApprovedEvents(): Observable<Event[]> {
    const headers = { 'Authorization': 'Bearer ' + this.authservice.accessToken }
    return this.http.get<Event[]>(`${this.baseUrl}/approved`, { headers });
  }

  getNotApprovedEvents(): Observable<Event[]> {
    const headers = { 'Authorization': 'Bearer ' + this.authservice.accessToken }
    return this.http.get<Event[]>(`${this.baseUrl}/notApproved`, { headers });
  }

  addEvent(event: Event, userId: number): Observable<Event> {
    const headers = { 'Authorization': 'Bearer ' + this.authservice.accessToken }
    return this.http.post<Event>(`${this.baseUrl}/addEvent/${userId}`, event, { headers });
  }

  getAllEvents(): Observable<Event[]> {
    const headers = { 'Authorization': 'Bearer ' + this.authservice.accessToken }
    return this.http.get<Event[]>(`${this.baseUrl}/all`, { headers });
  }

  getPersonalEvents(): Observable<Event[]> {
    const headers = { 'Authorization': 'Bearer ' + this.authservice.accessToken }
    return this.http.get<Event[]>(`${this.baseUrl}/personalEvents`, { headers });
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

  getCurrentUser() {
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
