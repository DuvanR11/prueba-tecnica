import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  song: any;

  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey)
  }

  async createPlayList(title: string, user_id: string): Promise<void> {
    try {
      const { error } = await this.supabase.from('playlists').insert([{ title, user_id }]);
      if (error) {
        throw new Error(`Error creating song: ${error.message}`);
      }
    } catch (error) {
      console.error('Error creating song:', error);
      throw error; 
    }
  }

  async getPlaylistsByUserId(userId: string) {
    const { data, error } = await this.supabase
      .from('playlists')
      .select('*')
      .eq('user_id', userId);
    if (error) {
      console.error('Error fetching playlists:', error.message);
      throw error;
    }
    return { data, error };
  }


  async getPlaylistById(playlistId: string) {
    const { data, error } = await this.supabase
      .from('playlists')
      .select('*')
      .eq('id', playlistId)
      .single(); 
    if (error) {
      console.error('Error fetching playlist:', error.message);
      throw error;
    }
    return { data, error };
  }
  

  async addSongToPlaylist(playlistId: string, songId: string) {
    const { data, error } = await this.supabase
      .from('playlist_songs')
      .insert([{ playlist_id: playlistId, song_id: songId }]);
    if (error) {
      console.error('Error adding song to playlist:', error.message);
      throw error;
    }
    return { data, error };
  }

  async getSongsByPlaylistId(playlistId: string): Promise<any> {
    const { data, error } = await this.supabase
      .from('playlist_songs')
      .select('songs(*)') 
      .eq('playlist_id', playlistId);
    if (error) {
      console.error('Error fetching songs by playlist ID:', error.message);
      throw error;
    }
    return data;
  }

}
