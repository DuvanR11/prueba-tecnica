import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LibraryComponent } from './library/library.component';
import { SongItemComponent } from './song-item/song-item.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AddPlayListComponent } from './add-play-list/add-play-list.component';


@NgModule({
  declarations: [
    BoxComponent,
    SidebarItemComponent,
    ListItemComponent,
    MediaItemComponent,
    LibraryComponent,
    SongItemComponent,
    ButtonComponent,
    ModalComponent,
    AddSongComponent,
    AddPlayListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    BoxComponent,
    SidebarItemComponent,
    ListItemComponent,
    MediaItemComponent,
    LibraryComponent,
    SongItemComponent,
    ButtonComponent,
    ModalComponent,
    AddSongComponent,
    AddPlayListComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
