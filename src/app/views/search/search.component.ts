import { Component } from '@angular/core';
import { SongService } from '../../services/song.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  songs: any;
  title: string = '';

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.fetchSongsByTitle(this.title);
    });
  }

  async fetchSongsByTitle(title: string): Promise<void> {
    try {
      this.songs = await this.songService.getSongsByTitle(title);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  }
}
