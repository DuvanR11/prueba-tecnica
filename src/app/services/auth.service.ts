import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { environment } from '../../environments/environment'


export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey)
  }

  get session() {
    return new Promise<AuthSession | null>((resolve, reject) => {
      this.supabase.auth.getSession().then(({ data, error }) => {
        if (error) {
          console.error('Error fetching session:', error.message);
          resolve(null); 
        } else {
          this._session = data.session;
          resolve(this._session); 
        }
      });
    });
  }


  profile(user: User) {
    return this.supabase
      .from('users')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password })
  }

  signUp(user_name: string, email: string, password: string) {
    return this.supabase.auth.signUp({ email, password })
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update)
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }

  uploadFile(bucket: string, filePath: string, file: File) {
    return this.supabase.storage.from(bucket).upload(filePath, file)
  }
  
  getImageUrl(imagePath: string) {
    return this.supabase.storage.from('images').createSignedUrl(imagePath, 60 * 60 * 24)
  }

  getSongUrl(songPath: string) {
    return this.supabase.storage.from('songs').createSignedUrl(songPath, 60 * 60 * 24)
  }

  async createSong(title: string, author: string, imagePath: string, songPath: string): Promise<void> {
    try {
      const { error } = await this.supabase.from('songs').insert([
        { title, image_path: imagePath, song_path: songPath }
      ]);

      if (error) {
        throw new Error(`Error creating song: ${error.message}`);
      }
    } catch (error) {
      console.error('Error creating song:', error);
      throw error; 
    }
  }
}