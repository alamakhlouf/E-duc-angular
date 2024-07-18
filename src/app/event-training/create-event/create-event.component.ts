import { Component, OnInit } from '@angular/core';
import { Event, EventCategory } from '../models/event.models';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  event: Event = {
    id: 0,
    title: '',
    description: '',
    eventDateTime: '',
    category: EventCategory.COMPUTER_SCIENCE,
    isOnline: false,
    isApproved: false,
    nbrOfPlaces: 0
  };
  categories = Object.keys(EventCategory);
  userId: number = 2; 

  constructor(private eventService: EventsService, private router: Router) { }

  ngOnInit(): void {

   }

  onSubmit(): void {
    this.eventService.addEvent(this.event, this.userId).subscribe(     
      response => {
        console.log('Event added successfully', response);
        this.router.navigate(['/training-events']); 
      },
      error => {
        console.error('Error adding event', error);
      }
    );
  }
}
