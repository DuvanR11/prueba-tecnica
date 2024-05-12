import { Component, Input } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() data: any;
  @Input() action!: boolean;
  player: any; 

  constructor( private playlistService: PlaylistService ) {}

  addToPlayList() {
    this.playlistService.addSongToPlaylist('1', this.data.id)
  }
}
