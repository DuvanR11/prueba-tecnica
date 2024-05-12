import { Component, Input, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { SupabaseService } from '../../services/auth.service';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrl: './search-content.component.css'
})
export class SearchContentComponent implements OnInit{
  @Input() songs: any;
  song: any;

  constructor(
    private songService: SongService,
    private supabaseService: SupabaseService
  ) {}

  async ngOnInit() {
    // this.song.image_path = (await this.supabaseService.getImageUrl(this.song.image_path)).data?.signedUrl
  }

  async onSongItemClick(id: string) {
    this.song = await this.songService.getSong(id)
    this.song.song_path = (await this.supabaseService.getSongUrl(this.song.song_path)).data?.signedUrl
    this.songService.changeAudio(this.song)
    this.songService.openAudioPlayer();
  }
}
