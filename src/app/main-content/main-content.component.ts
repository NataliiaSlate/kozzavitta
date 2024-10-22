import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngt-main-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
