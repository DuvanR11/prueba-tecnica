import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-like-button',
  template: `
    <button
      class="cursor-pointer hover:opacity-75 transition"
      (click)="handleLike()"
    >
      <ng-container *ngIf="isLiked; else notLiked">
        yeslike
      </ng-container>
      <ng-template #notLiked>
        NoLike
      </ng-template>
    </button>
  `,
})
export class LikeButtonComponent {
  @Input() songId!: number;

  isLiked: boolean = false;

  constructor(private router: Router) {}

  async ngOnInit() {
    
  }

  async handleLike() {
   
  }
}
