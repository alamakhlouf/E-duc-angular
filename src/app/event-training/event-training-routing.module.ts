import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventTrainingDefaultComponent } from './event-training-default/event-training-default.component';

const routes: Routes = [
  { path: '', component: EventTrainingDefaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventTrainingRoutingModule { }

