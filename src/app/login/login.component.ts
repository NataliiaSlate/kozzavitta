import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'ngt-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordModule,
    FloatLabelModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CardModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(255)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly router: Router,
  ) {}

  login(): void {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.7;

      if (isSuccess) {
        this.router.navigate(['/home']);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid credentials. Please try again.',
          life: 3000,
        });
      }
    }, 1000);
  }

  navigateToRegistration(): void {
    this.router.navigate(['/registration']);
  }

  navigateToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }
}
