import { Component, Input } from '@angular/core';
import { SongService } from '../../services/song.service';
import { SupabaseService } from '../../services/auth.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.css'
})
export class HomeContentComponent {
  @Input() songs: any[] = [];
  song: any;

  constructor(
    private songService: SongService,
    private supabaseService: SupabaseService

  ) {}

  async onSongItemClick(id: string) {
    this.song = await this.songService.getSong(id)
    this.song.song_path = (await this.supabaseService.getSongUrl(this.song.song_path)).data?.signedUrl
    this.songService.changeAudio(this.song)
    this.songService.openAudioPlayer();
  }
}
