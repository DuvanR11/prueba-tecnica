import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist-content',
  templateUrl: './playlist-content.component.html',
  styleUrl: './playlist-content.component.css'
})
export class PlaylistContentComponent {
  @Input() songs!: any[];
  isLoading: boolean = false;
  user: any;

  constructor(
    private router: Router,
   
  ) { }

  ngOnInit(): void {
   
  }

}
