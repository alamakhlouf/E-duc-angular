import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDefaultComponent } from './users-default/users-default.component';

const routes: Routes = [
  { path: '', component: UsersDefaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
