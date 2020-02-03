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
  artistsByVote: Artist[] = [];
  bestArtist: Artist = new Artist();

  constructor(private artistService: ArtistService,
    // tslint:disable-next-line: align
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.artistService.getByVotes().subscribe((artistsByVote) => {
      this.artistsByVote = artistsByVote;
      this.bestArtist = artistsByVote[0];
    });
  }

  // videoURL() {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.bestArtist.videoUrl);
  // }
}
