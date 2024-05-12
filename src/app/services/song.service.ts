import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private supabase: SupabaseClient
  private audioSource = new BehaviorSubject<any>(null);
  private audioPlayerOpen = new BehaviorSubject<boolean>(false)

  currentAudio = this.audioSource.asObservable();
  audioPlayer = this.audioPlayerOpen.asObservable();

  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey)
  }


  openAudioPlayer() {
    this.audioPlayerOpen.next(true);
  }

  closeAudioPlayer() {
    this.audioPlayerOpen.next(false);
  }

  changeAudio(audio: any) {
    this.audioSource.next(audio);
  }

  async getSong(songId: string): Promise<void> {
    try {
      const { data, error } = await this.supabase
        .from('songs')
        .select('*')
        .eq('id', songId)
        .single();
      if (error) {
        console.error('Error fetching song URL:', error.message);
        throw error;
      }
      return data
    } catch (error) {
      console.error('Error fetching song URL:', error);
    }
  }

  async getAllSongs() {
    const { data, error } = await this.supabase.from('songs').select('*');
    if (error) {
      console.error('Error al obtener las canciones:', error.message);
      return null;
    } else {
      return data;
    }
  }

  async getSongsByTitle(title: string): Promise<any> {
    const { data, error } = await this.supabase
      .from('songs')
      .select('*')
      .ilike('title', `%${title}%`); 
    if (error) {
      console.error('Error fetching songs by title:', error.message);
      throw error;
    }
    return data;
  }

  async addLikeSongs(user_id: string, songId: string) {
    const { data, error } = await this.supabase
      .from('liked_songs')
      .insert([{ user_id: user_id, song_id: songId }]);
    if (error) {
      console.error('Error adding song to liked_songs:', error.message);
      throw error;
    }
    return { data, error };
  }

  async getLikeSongs(user_id: string): Promise<any> {
      const { data, error } = await this.supabase
        .from('liked_songs')
        .select('songs(*)')
        .eq('user_id', user_id)
      if (error) {
        console.error('Error fetching songs by liked_songs ID:', error.message);
        throw error;
      }
      return data;
  }

  async removeLikeSong(user_id: string, songId: string): Promise<void> {
    try {
      const { data, error } = await this.supabase
        .from('liked_songs')
        .delete()
        .eq('user_id', user_id)
        .eq('song_id', songId);
      if (error) {
        console.error('Error removing song from liked_songs:', error.message);
        throw error;
      }
    } catch (error) {
      console.error('Error removing song from liked_songs:', error);
      throw error;
    }
  }
  
}
