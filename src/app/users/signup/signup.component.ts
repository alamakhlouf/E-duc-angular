import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formSignup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService, private router: Router) {
    this.formSignup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      subscribe: [false]
    });
  }

  handleSignup() {
    if (this.formSignup.valid) {
      this.authService.register(this.formSignup.value).subscribe(
        response => {
          console.log('Registration successful', response);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
      this.router.navigateByUrl("/welcome")
    }
  }

}
