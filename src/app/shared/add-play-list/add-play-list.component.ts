import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/auth.service';
import { ModalService } from '../../services/modals.service';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-add-play-list',
  templateUrl: './add-play-list.component.html',
  styleUrl: './add-play-list.component.css'
})
export class AddPlayListComponent {
  isLoading: boolean = false;
  playLitsForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private supabaseService: SupabaseService,
    private playlistService: PlaylistService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.playLitsForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.playLitsForm.invalid) {
      alert('Missing fields');
      return;
    }

    this.isLoading = true;

    try {
      const title = this.playLitsForm.value.title;

      await this.playlistService.createPlayList(title, '16773ad4-8f34-45a4-aa46-7e7863fe9911');

      this.router.navigate(['/']);
      alert('playList created!');
      this.playLitsForm.reset();
      this.modalService.closeModal('add-playlist')
    } catch (error) {
      console.error('Error uploading song:', error);
      alert('Failed to playList song');
    } finally {
      this.isLoading = false;
    }
  }

}
