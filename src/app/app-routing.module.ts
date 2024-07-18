import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./users/signup/signup.component";
import {LoginComponent} from "./users/login/login.component";
import {AdminTemplateComponent} from "./users/admin-template/admin-template.component";
import {AuthentificationGuard} from "./users/guards/authentification.guard";
import {TestComponent} from "./users/test/test.component";
import {NewUserComponent} from "./users/new-user/new-user.component";
import {AuthorizationGuard} from "./users/guards/authorization.guard";
import {NotAuthorizedComponent} from "./users/not-authorized/not-authorized.component";
import {ManageProfileComponent} from "./users/manage-profile/manage-profile.component";
import {WelcomeuserComponent} from "./users/welcomeuser/welcomeuser.component";

const routes: Routes = [
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'quizz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'forum', loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule) },
  { path: 'training-events', loadChildren: () => import('./event-training/event-training.module').then(m => m.EventTrainingModule) },
  { path: 'signup', component: SignupComponent },
  {path : 'login' , component: LoginComponent},
  {path : 'manageprofile' , component: ManageProfileComponent},
  { path: 'welcome', component: WelcomeuserComponent },
  {path : 'admin' , component: AdminTemplateComponent, canActivate : [AuthentificationGuard]
    , children :[
      {path : 'test' , component: TestComponent},
      {path : 'new-user' , component: NewUserComponent, canActivate : [AuthorizationGuard], data: {role:"ADMIN"}},
      {path:"notAuthorized", component : NotAuthorizedComponent},
    ]},
  {path : '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
