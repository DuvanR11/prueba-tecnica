import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  song: any | undefined;
  isOpenPlayer!: boolean;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.currentAudio.subscribe(value => {
      this.song = value;
    });

    this.songService.audioPlayer.subscribe((isOpen: boolean) => {
      this.isOpenPlayer = isOpen;
    });
  }

  addLikeSong() {
    this.songService.addLikeSongs('16773ad4-8f34-45a4-aa46-7e7863fe9911', this.song.id)
  }
}
