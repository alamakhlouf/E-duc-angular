import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumDefaultComponent } from './forum-default/forum-default.component';

const routes: Routes = [
  { path: '', component: ForumDefaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
