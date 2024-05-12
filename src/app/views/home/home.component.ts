import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongService } from '../../services/song.service';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  songs$: Observable<Song[]> | any;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.fetchSongs();
  }

  async fetchSongs(): Promise<void> {
    this.songs$ = await this.songService.getAllSongs();
  }


}