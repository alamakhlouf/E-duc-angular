import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formSignup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService) {
    this.formSignup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      subscribe: [false]
    });
  }

  handleSignup() {
    this.authService.register(this.formSignup.value).subscribe(
      response => {
        console.log('Registration successful', response);
        // Handle successful registration, e.g., navigate to login
      },
      error => {
        console.error('Registration failed', error);
        // Handle registration error, e.g., display error message
      }
    );
  }


}
