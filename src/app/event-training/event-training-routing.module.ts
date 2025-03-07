import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventTrainingDefaultComponent } from './event-training-default/event-training-default.component';
import { CreateEventComponent } from './create-event/create-event.component';

const routes: Routes = [
  { path: '', component: EventTrainingDefaultComponent },
  { path: 'add-event', component: CreateEventComponent },
  { path: 'edit-event/:id', component: CreateEventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventTrainingRoutingModule { }

