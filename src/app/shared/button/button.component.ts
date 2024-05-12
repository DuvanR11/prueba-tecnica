import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="type"
      [ngClass]="buttonClasses"
      [disabled]="disabled"
      (click)="onClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() additionalClasses: string = '';

  get buttonClasses(): string {
    const baseClasses = 'w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition';
    return this.additionalClasses ? `${baseClasses} ${this.additionalClasses}` : baseClasses;
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  onClick(event: MouseEvent): void {
  }
}
