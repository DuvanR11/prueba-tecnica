import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/modals.service';

@Component({
  selector: 'app-modal',
  template: `
    <div [id]="modalId" *ngIf="isModalOpen()">
      <div class="overlay"></div>
      <div class="modal modalfixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
        <div class="content ">
          <h2 class="font-bold text-xl mb-4 text-white">{{ title }}</h2>
          <p class="text-sm leading-normal mb-5 text-white">{{ description }}</p>
          <ng-content></ng-content>
          <button class="close-btn" (click)="closeModal()">
            <span aria-labelledby="radix-:ra:">x</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 2;
    }
    .content {
      text-align: center;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background: none;
      cursor: pointer;
    }
    .close-icon {
      font-size: 20px;
    }
  `]
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() modalId!: string;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: ModalService) { }

  isModalOpen() {
    return this.modalService.isModalOpen(this.modalId);
  }

  closeModal() {
    this.modalService.closeModal(this.modalId);
  }

}
