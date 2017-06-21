import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  authToken: string;

  constructor(private http: Http) { }

  searchMusic(str:string) {
    if (str !== undefined) {
      let headers = new Headers();
    this.searchUrl = "https://api.spotify.com/v1/search?q=" + str + "&type=artist,track"+ "&market=FI";
    headers.append("Authorization", "Bearer " + this.authToken);
    return this.http.get(this.searchUrl, {headers:headers}).map(res => res.json());
    }   
  }

  authorize() {
    if (this.authToken === undefined || this.authToken === null) {
      window.location.replace("https://accounts.spotify.com/authorize?client_id=a32abeee71304cb7a67ae4ac0816b8ff&redirect_uri=http://localhost:4200&scope=&response_type=token&state=123");
    }
  }

  getArtist(id:string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + this.authToken);
    this.artistUrl ="https://api.spotify.com/v1/artists/" + id;
    return this.http.get(this.artistUrl, {headers: headers})
      .map(res => res.json());
  }

  getAlbums(artistId:string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + this.authToken);
    this.albumsUrl ="https://api.spotify.com/v1/artists/" + artistId + "/albums?limit=50";
    return this.http.get(this.albumsUrl, {headers: headers})
      .map(res => res.json());
  }

  getAlbum(id:string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + this.authToken);
    this.albumUrl ="https://api.spotify.com/v1/albums/" + id;
    return this.http.get(this.albumUrl, {headers: headers})
      .map(res => res.json());
  }

  getToken() {
    	const re = /=[\w-]*&\b/
      let authCode: string = window.location.href.match(re).toString();   
      this.authToken = authCode.slice(1, -1);
      return this.authToken;
  }
}
