import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchStr: string;
  searchRes: Artist[];

  constructor(
    private router: Router,
    private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getToken();
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }

  authorize() {
    this.spotifyService.authorize();
  }

  getToken() {
    this.spotifyService.getToken();
  }
  
  

}
