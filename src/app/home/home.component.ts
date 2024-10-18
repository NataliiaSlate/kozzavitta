import { Component } from '@angular/core';

import { ContactUsComponent } from 'app/contact-us/contact-us.component';
import { FooterComponent } from 'app/footer/footer.component';
import { HeaderComponent } from 'app/header/header.component';
import { MainContentComponent } from 'app/main-content/main-content.component';

@Component({
  selector: 'ngt-home',
  standalone: true,
  imports: [HeaderComponent, MainContentComponent, ContactUsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
