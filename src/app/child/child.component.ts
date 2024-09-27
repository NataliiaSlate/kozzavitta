import { Component, Input, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ngt-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements AfterContentInit {
  @Input() parentText: string = '';
  @ContentChild('projectedContent', { static: true }) projectedContent!: ElementRef;

  childComponentText: string = 'Text from Child Component';

  ngAfterContentInit(): void {
    if (this.projectedContent) {
      this.projectedContent.nativeElement.textContent = 'Projected content by Child';
    }
  }

  changeText(newText: string): void {
    this.childComponentText = newText;
  }
}
