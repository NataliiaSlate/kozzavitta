import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ChildComponent } from 'app/child/child.component';

@Component({
  selector: 'ngt-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) ChildComponent!: ChildComponent;

  parentMessage: string = 'Text in the Parent Component';

  ngAfterViewInit() {
    this.ChildComponent.changeText('Updated text from Parent after view init!');
  }
}
