import { Artist } from './../models/artist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  static URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Artist[]> {
    return this.http
      .get(ArtistService.URL)
      .pipe(map(this.convertDataFromServerToArtists));
  }

  public getByVotes(): Observable<Artist[]> {
    return this.http
      .get(ArtistService.URL + '/bests')
      .pipe(map(this.convertDataFromServerToArtists));
  }

  private convertDataFromServerToArtists(artists: any[]): Artist[] {
    return artists.map(artist => new Artist(artist));
  }

  public getById(id: number): Observable<Artist> {
    return this.http
      .get(ArtistService.URL + '/' + id)
      .pipe(map((artist: Artist) => new Artist(artist)));
  }
}
