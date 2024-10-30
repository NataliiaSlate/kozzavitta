import { Component } from '@angular/core';

import { FooterComponent } from 'app/footer/footer.component';
import { HeaderComponent } from 'app/header/header.component';
import { MainContentComponent } from 'app/main-content/main-content.component';

@Component({
  selector: 'ngt-home',
  standalone: true,
  imports: [HeaderComponent, MainContentComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
