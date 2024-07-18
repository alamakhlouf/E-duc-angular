import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTrainingRoutingModule } from './event-training-routing.module';
import { EventTrainingDefaultComponent } from './event-training-default/event-training-default.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { EditEventComponent } from './edit-event/edit-event.component';



@NgModule({
  declarations: [
    EventTrainingDefaultComponent,
    CreateEventComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,
    EventTrainingRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EventTrainingModule { }
