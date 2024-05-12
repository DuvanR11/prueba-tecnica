import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
    <div [ngClass]="getClasses()">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class BoxComponent {
  @Input() className: string | undefined;

  getClasses(): string {
    return `bg-neutral-900 rounded-lg h-fit w-full ${this.className || ''}`;
  }
}
