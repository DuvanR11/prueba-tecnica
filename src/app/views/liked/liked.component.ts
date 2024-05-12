import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrl: './liked.component.css'
})
export class LikedComponent {
  playlistId: string = '';
  playlist: any; 
  songs: any
  playListSongs: any;

  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.fetchSongsByPlayList()
  }

  async fetchSongsByPlayList(): Promise<void> {
    this.playListSongs = await this.songService.getLikeSongs('16773ad4-8f34-45a4-aa46-7e7863fe9911')
  }

  async removeLikedSong(song_id: string): Promise<void> {
    try {
      await this.songService.removeLikeSong('16773ad4-8f34-45a4-aa46-7e7863fe9911', song_id);
      await this.fetchSongsByPlayList();
    } catch (error) {
      console.error('Error removing liked song:', error);
    }
  }
}
