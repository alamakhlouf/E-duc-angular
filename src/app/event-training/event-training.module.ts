import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTrainingRoutingModule } from './event-training-routing.module';
import { EventTrainingDefaultComponent } from './event-training-default/event-training-default.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventTrainingDefaultComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    EventTrainingRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EventTrainingModule { }
