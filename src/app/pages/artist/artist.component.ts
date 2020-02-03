import { ArtistService } from './../../services/artist.service';
import { Artist } from './../../models/artist';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(private artistService: ArtistService,
    // tslint:disable-next-line: align
    public sanitizer: DomSanitizer
  ) { }
  artistsByVote: Artist[] = [];
  bestArtist: Artist = new Artist();
  artists: Artist[] = [];
  showArtist: Artist;

  ngOnInit() {
    this.artistService.getByVotes().subscribe((artistsByVote) => {
      this.artistsByVote = artistsByVote;
      this.bestArtist = artistsByVote[0];
    });
    this.artistService.getAll().subscribe((artists) => {
      this.artists = artists;
    });
  }

  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.bestArtist.videoUrl);
  }

  artistCliqued(artist: Artist) {
    this.showArtist = artist;
  }

  addVote() {
    this.showArtist.nbVote += 1;
    this.artistService.update(this.showArtist).subscribe();
    this.artistService.getByVotes().subscribe((artistsByVote) => {
      this.artistsByVote = artistsByVote;
      this.bestArtist = artistsByVote[0];
    });
    this.artistService.getAll().subscribe((artists) => {
      this.artists = artists;
    });
  }
}
