import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumEditComponent } from './forum-edit/forum-edit.component';



const routes: Routes = [
  { path: '', component: ForumListComponent },
  { path: 'edit', component: ForumEditComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
