import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  template: `
    <button class="relative w-full group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4" (click)="handleClick()">
      <div class="relative h-[64px] w-[64px]">
        <img [src]="image" class="object-cover" alt="Image" />
      </div>
      <p class="font-medium truncate text-white py-5">{{ name }}</p>
      <div class="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover;scale-110">
        <img src="assets/svgs/play.svg">
      </div>
    </button>
  `
})
export class ListItemComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() href!: string;

  constructor(private router: Router) {}

  handleClick() {
    this.router.navigateByUrl(this.href);
  }
}
