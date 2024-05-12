import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/auth.service';
import { ModalService } from '../../services/modals.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
})
export class AddSongComponent implements OnInit {
  isLoading: boolean = false;
  uploadForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private supabaseService: SupabaseService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      song: [null, Validators.required],
      image: [null, Validators.required]
    });
  }
  
  async onSubmit() {
    if (this.uploadForm.invalid) {
      alert('Missing fields');
      return;
    }

    this.isLoading = true;

    try {
      const title = this.uploadForm.value.title;
      const author = this.uploadForm.value.author;
      const songFile = this.uploadForm.value.song[0];
      const imageFile = this.uploadForm.value.image[0];

      const songPath = await this.supabaseService.uploadFile('songs', songFile.name.split('.')[0], songFile);
      const imagePath = await this.supabaseService.uploadFile('images', imageFile.name.split('.')[0], imageFile);

      await this.supabaseService.createSong(title, author, imagePath.data?.path!, songPath.data?.path!);

      this.router.navigate(['/']);
      alert('Song created!');
      this.uploadForm.reset();
    } catch (error) {
      console.error('Error uploading song:', error);
      alert('Failed to create song');
    } finally {
      this.isLoading = false;
    }
  }

  onFileChange(event: Event, controlName: string) {
    const files = (event.target as HTMLInputElement).files;
    this.uploadForm.patchValue({ [controlName]: files });
  }
}
