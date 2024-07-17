import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { QuizModule } from './quiz/quiz.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from "./users/login/login.component";
import {AdminTemplateComponent} from "./users/admin-template/admin-template.component";
import {TestComponent} from "./users/test/test.component";
import {NavbarComponent} from "./users/navbar/navbar.component";
import {NewUserComponent} from "./users/new-user/new-user.component";
import {NotAuthorizedComponent} from "./users/not-authorized/not-authorized.component";
import {ManageProfileComponent} from "./users/manage-profile/manage-profile.component";
import {SignupComponent} from "./users/signup/signup.component";
import {WelcomeuserComponent} from "./users/welcomeuser/welcomeuser.component";
import {AppHttpInterceptor} from "./users/interceptors/app-http.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    LoginComponent,
    AdminTemplateComponent,
    TestComponent,
    NavbarComponent,
    NewUserComponent,
    NotAuthorizedComponent,
    ManageProfileComponent,
    SignupComponent,
    WelcomeuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuizModule,
    NoopAnimationsModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
