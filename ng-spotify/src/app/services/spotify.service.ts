import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private searchUrl: string;

  constructor(private http: Http) { }

  searchMusic(str:string) {
    let headers = new Headers();
    this.searchUrl = "https://api.spotify.com/v1/searchq=" + str + "&type=artist,track,album"+ "&market=FI";
    headers.append("Authorization", "Bearer BQCYp7Lyl1T_cQUFmRrpUkK5kgHMYCKTvJJedtyQuGkKvcn1cowxGfaDJOdJSXd15og7wQq3Uqz6413kPO7j2SXKXUn0nLWoF38CzH294CimtM_qukEw1HOnf5KsbQCSBtlMY0ll6g");
    
    return this.http.get(this.searchUrl, {headers: headers}).map(res => res.json());
  }

 // TODO register app with Spotify
 // TODO get authorization working
 // TODO get information user requested
 

}
