import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'ngt-contact-us',
  standalone: true,
  providers: [MessageService],
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  contactUsForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(255)]],
    message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
  });
  isSubmittedSuccessfully: boolean | undefined;
  value: string = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.contactUsForm.statusChanges.subscribe((status) => {
      console.log(`Form Status: ${status}`);
    });
  }

  submit(): void {
    this.messageService.add({
      severity: 'success',
      detail: 'Thank you! We will get back to you soon',
    });
    this.contactUsForm.reset();
  }
}
