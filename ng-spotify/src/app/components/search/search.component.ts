import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchStr: string;

  constructor(
    private router: Router,
    private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(res.artists.item);
    })
  }

}
