import { Component, Input, OnInit } from '@angular/core';
import { SupabaseService } from '../../services/auth.service';
import { ModalService } from '../../services/modals.service';
import { PlaylistService } from '../../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{

  @Input() songs: any[] | undefined;
  user: any; 
  playlists: any

  constructor(
    private supabaseService: SupabaseService,
    private modalService: ModalService,
    private playlistService: PlaylistService,
    private router: Router
  ) {
    this.songs = []
  }
  async ngOnInit() {
    this.user = await this.supabaseService.session
    this.fetchPlayLists()
  }

  async fetchPlayLists(): Promise<void> {
    this.playlists = (await this.playlistService.getPlaylistsByUserId('16773ad4-8f34-45a4-aa46-7e7863fe9911')).data;
  }

  addPlayList(modalName: string) {
    if (!this.user) {
      alert("Debe loguear")
    } else {
      this.modalService.openModal(modalName);
    }
  }

  viewDetail(playId: string) {
    this.router.navigate(['/home/playlist', playId]);
  }


}
