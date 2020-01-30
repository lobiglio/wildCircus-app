import { ArtistService } from './../../services/artist.service';
import { Artist } from './../../models/artist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  artists: Artist[];
  artistsByVote: Artist[];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getAll().subscribe((artists) => {
      this.artists = artists;
    });
    this.artistService.getByVotes().subscribe((artistByVote) => {
      this.artistsByVote = artistByVote;
    });
  }

}
