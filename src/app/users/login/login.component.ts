import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthentificationService } from "../services/authentification.service";
import { Router } from "@angular/router";
import { ModalService } from "../services/modal.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!: FormGroup;
  formSignup!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService,
    private router: Router, private modalService: ModalService) {
  }

  ngOnInit() {
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })

    this.formSignup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  handleLogin() {
    console.log(this.formLogin.value)
    let username = this.formLogin.value.username;
    let pwd = this.formLogin.value.password;
    this.authService.login(username, pwd).subscribe({
      next: (data) => {
        this.authService.loadProfile(data);
        console.log(data)
        this.router.navigateByUrl("/admin")
      },
      error: err => {
        console.log(err);
      }
    })
  }


  redirectToSignup(): void {
    window.location.href = 'http://localhost:8081/auth/admin';
  }

  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }





}
