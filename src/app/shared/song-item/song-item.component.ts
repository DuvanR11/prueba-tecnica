import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { SupabaseService } from '../../services/auth.service';


@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent {
  @Input() data: any | undefined;
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();
  imagePath: string | undefined;
  faPlay=faPlay

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    if (this.data) {
      this.imagePath = (await this.supabaseService.getImageUrl(this.data.image_path)).data?.signedUrl;
    }
  }

  handleClick(id: string): void {
    this.onClick.emit(id);
  }
}
