import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input 
      [type]="type" 
      [placeholder]="placeholder" 
      [value]="inputValue"
      (input)="onInput($event)"
      class="flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus-within:outline-none"
    />
  `,
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = ''; 
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  inputValue: string = this.value;

  onInput(event: any): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.inputValue = newValue;
    this.valueChange.emit(newValue);
  }
}
