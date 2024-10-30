import { Component } from '@angular/core';

import { ContactUsComponent } from 'app/contact-us/contact-us.component';

@Component({
  selector: 'ngt-footer',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
