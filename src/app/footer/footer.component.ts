import { Component } from '@angular/core';

import { ParentComponent } from 'app/parent/parent.component';

@Component({
  selector: 'ngt-footer',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
