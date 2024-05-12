import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalStatus: { [key: string]: boolean } = {};
  
  constructor() { }

  openModal(modalId: string) {
    this.modalStatus[modalId] = true;
  }

  closeModal(modalId: string) {
    this.modalStatus[modalId] = false;
  }

  isModalOpen(modalId: string): boolean {
    return this.modalStatus[modalId] || false;
  }
}
