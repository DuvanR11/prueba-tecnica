import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { LikedComponent } from './liked/liked.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'playlist/:id', component: PlaylistDetailComponent },
  { path: 'liked', component: LikedComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
