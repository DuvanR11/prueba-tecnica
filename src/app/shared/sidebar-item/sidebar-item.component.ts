import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  template: `
    <div class="flex gap-[1rem]">
      <img [src]="'assets/svgs/' + icon">
      <a [routerLink]="href" [class.active]="active" class="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1">
        <p class="truncate w-full">{{ label }}</p>
      </a>
    </div>
  `,
  styles: [
    `
    .active {
      color: white;
    }
    `
  ]
})
export class SidebarItemComponent {
  @Input() icon: any;
  @Input() label: string | undefined;
  @Input() active?: boolean;
  @Input() href: string | undefined;
  
}
