import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  artist: Artist[];
  album: Album[];

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
  ) { }

 ngOnInit() {
  this.route.params
    .map(params => params["id"])
    .subscribe(id => {
      this.spotifyService.getAlbum(id)
        .subscribe(album => {
          this.album = album;
      })
    })
  }

}
