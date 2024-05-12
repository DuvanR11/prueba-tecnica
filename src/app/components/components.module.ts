import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { PlayerComponent } from './player/player.component';
import { HeaderComponent } from './header/header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { InputComponent } from './input/input.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { PlaylistContentComponent } from './playlist-content/playlist-content.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';


@NgModule({
    declarations: [
        SidebarComponent,
        PlayerComponent,
        HeaderComponent,
        HomeContentComponent,
        SignInComponent,
        InputComponent,
        SearchInputComponent,
        SearchContentComponent,
        LikeButtonComponent,
        PlaylistContentComponent,
        SingUpComponent
    ],
    exports: [
        SidebarComponent,
        PlayerComponent,
        HeaderComponent,
        HomeContentComponent,
        SignInComponent,
        InputComponent,
        SearchInputComponent,
        SearchContentComponent,
        LikeButtonComponent,
        PlaylistContentComponent,
        SingUpComponent
    ],
    providers: [],
    bootstrap: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class ComponentsModule { }
