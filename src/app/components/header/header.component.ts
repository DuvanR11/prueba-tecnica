import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SupabaseService } from '../../services/auth.service';
import { ModalService } from '../../services/modals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent implements OnInit {
  user: any = false; 
  session!: any;

  faHome=faHome
  faSearch=faSearch

  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
    private modalService: ModalService
  ) {}

  async ngOnInit() {
    this.session = await this.supabaseService.session
  }
  
  async logout() {
    this.supabaseService.signOut()
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']).then(() => {
      window.history.back();
    });
  }

  goForward() {
    this.router.navigate(['/']).then(() => {
      window.history.forward();
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goSearch() {
    this.router.navigate(['/home/search?title='])
  }

  goToAccount() {
    this.router.navigate(['/account']);
  }

  openSignUpModal(modalName: string) {
    this.modalService.openModal(modalName);
  }

  openLogInModal(modalName: string) {
    this.modalService.openModal(modalName);
  }
  
}
