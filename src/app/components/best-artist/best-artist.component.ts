import { Artist } from './../../models/artist';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-best-artist',
  templateUrl: './best-artist.component.html',
  styleUrls: ['./best-artist.component.scss']
})
export class BestArtistComponent implements OnInit {
  @Input() artist: Artist;

  constructor() { }

  ngOnInit() {
  }

}
