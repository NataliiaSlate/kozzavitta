import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ngt-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactUsForm.statusChanges.subscribe((status) => {
      console.log(`Form Status: ${status}`);
    });
  }

  submit(): void {
    this.isSubmittedSuccessfully = true;

    setTimeout(() => {
      this.isSubmittedSuccessfully = false;
    }, 10000);

    this.contactUsForm.reset();
  }
}
