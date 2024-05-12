import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrl: './playlist-detail.component.css'
})
export class PlaylistDetailComponent {
  playlistId: string = '';
  playlist: any; 
  songs: any
  playListSongs: any;

  constructor(
    private route: ActivatedRoute, 
    private playlistService: PlaylistService,
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.fetchSongsByPlayList()
    this.fetchSongs()
    this.route.params.subscribe(params => {
      this.playlistId = params['id'];
      this.loadPlaylistDetails();
    });
  }

  async loadPlaylistDetails(): Promise<void> {
    this.playlist =  (await this.playlistService.getPlaylistById(this.playlistId)).data
  }

  async fetchSongs(): Promise<void> {
    this.songs = await this.songService.getAllSongs();
  }

  async fetchSongsByPlayList(): Promise<void> {
    this.playListSongs = await this.playlistService.getSongsByPlaylistId('1');
  }
  
}
