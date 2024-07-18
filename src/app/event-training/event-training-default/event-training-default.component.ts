import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, EventCategory } from '../models/event.models';
import { EventsService } from '../services/events.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-training-default',
  templateUrl: './event-training-default.component.html',
  styleUrls: ['./event-training-default.component.scss']
})
export class EventTrainingDefaultComponent implements OnInit {
  returnedEvents: Event[] = [];
  currentUser: any;
  appliedFilter: string = '';
  isLoading: boolean = true;
  selectedCategories: EventCategory[] = [];
  categories: any = [
    'COMPUTER_SCIENCE',
    'EMBEDDED_SYSTEMS',
    'AI',
    'DEVOPS',
    'DATA_ANALYSIS',
    'BUSINESS_ANALYSIS'
  ];
  remainingPlaces: number = 0
  constructor(private eventService: EventsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.currentUser = this.eventService.getCurrentUser();
    console.log("Current User:", this.currentUser);
    this.getReturnedEvents()
    
  }

  getReturnedEvents() {
    switch (this.currentUser.role.name) {
      case 'ADMIN':
        this.fetchAllEvents();
        break;
      case 'TEACHER':
        this.fetchPersonalEvents();
        break;
      default:
        this.fetchApprovedEvents();
        break;
    }
  }

  fetchAllEvents() {
    this.isLoading = true;
    this.eventService.getAllEvents().subscribe(
      events => {
        this.returnedEvents = events;
        console.log('All events', this.returnedEvents);
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching all events', error);
      }
    );
  }

  fetchPersonalEvents() {
    this.isLoading = true;
    this.eventService.getPersonalEvents().subscribe(
      events => {
        this.returnedEvents = events;
        console.log('Personal events', this.returnedEvents);
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching personal events', error);
      }
    );
  }

  fetchApprovedEvents() {
    this.isLoading = true;
    this.eventService.getApprovedEvents().subscribe(
      events => {
        this.returnedEvents = events;
        console.log('Approved events', this.returnedEvents);
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching approved events', error);
      }
    );
  }

  fetchNotApprovedEvents(){
    this.isLoading = true;
    this.eventService.getNotApprovedEvents().subscribe(
      events => {
        this.returnedEvents = events;
        console.log('Approved events', this.returnedEvents);
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching approved events', error);
      }
    );
  }

  fetchEventsByCategoryAdmin() {
    this.isLoading = true;
    this.eventService.getEventsByCategoryAdmin(this.selectedCategories).subscribe(
      events => {
        this.returnedEvents = events;
        console.log('Events by category', this.returnedEvents);
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching events by category', error);
      }
    );
  }

  onDeleteEvent(eventId: number): void {
    console.log('jl,ler,', eventId);
    
    this.eventService.deleteEvent(eventId).subscribe(
      () => {
        this.ngOnInit()
        console.log(`Event with ID ${eventId} deleted successfully.`);
      },
      error => {
        console.error('Error deleting event:', error);
      }
    );
  }

  onApprouveEvent(eventId: number): void {
    this.eventService.approuveEvent(eventId).subscribe(
      () => {
        console.log(`Event with ID ${eventId} approved successfully.`);
        this.ngOnInit(); // Refresh the event list
      },
      error => {
        console.error('Error approving event:', error);
      }
    );
  }

  wichImage(category: string): string {
    switch (category) {
      case 'COMPUTER_SCIENCE': return 'https://datametrik.com.tr/media/services/devops-hizmetleri.webp';
      case 'EMBEDDED_SYSTEMS': return 'https://www.electronicsforu.com/wp-contents/uploads/2016/10/embedded_systems.jpg';
      case 'AI': return 'https://th.bing.com/th/id/OIP.B1Zak-UBkL6sQj_zvZ2MSgHaEK?w=626&h=352&rs=1&pid=ImgDetMain';
      case 'DEVOPS': return 'https://th.bing.com/th/id/OIP.2DmKtBmGsMQpd2wYBtniCQHaEB?rs=1&pid=ImgDetMain';
      case 'DATA_ANALYSIS': return 'https://th.bing.com/th/id/OIP.3-2MX2pI177RMlGCTKld6wHaE7?rs=1&pid=ImgDetMainl';
      case 'BUSINESS_ANALYSIS': return 'https://th.bing.com/th/id/R.284a0fd9ea18a0761871757ee839a9b7?rik=PW6yG98AR2A1vA&pid=ImgRaw&r=0';
      default: return 'https://th.bing.com/th/id/OIP.o_2iKjfodknWoYLwbdfsWgHaE8?rs=1&pid=ImgDetMain';
    }
  }

  onCategoryChange(category: EventCategory, event: any) {
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.fetchEventsByCategoryAdmin();
  }

  getRemainingPlaces(id: number): void{
console.log
("AAAAAAAAAAAAAAAAA")
    this.eventService.getRemainingPlaces(id).subscribe(     
      response => {
        this.remainingPlaces = response
      },
      error => {
        console.error('Error adding event', error);
      }
    );
  }
}
