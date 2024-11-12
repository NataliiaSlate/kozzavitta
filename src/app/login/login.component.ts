import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(255)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  login(): void {
    console.log('login');
  }
}
