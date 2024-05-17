import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTrainingRoutingModule } from './event-training-routing.module';
import { EventTrainingDefaultComponent } from './event-training-default/event-training-default.component';



@NgModule({
  declarations: [
    EventTrainingDefaultComponent
  ],
  imports: [
    CommonModule,
    EventTrainingRoutingModule
  ]
})
export class EventTrainingModule { }
