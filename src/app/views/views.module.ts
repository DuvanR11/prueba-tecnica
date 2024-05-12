import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { LikedComponent } from './liked/liked.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    AccountComponent,
    PlaylistDetailComponent,
    LikedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewsRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  providers: []
})
export class ViewsModule { }
