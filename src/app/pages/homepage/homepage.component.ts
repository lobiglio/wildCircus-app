import { PetitionService } from './../../services/petition.service';
import { Petition } from './../../models/petition';
import { ArtistService } from './../../services/artist.service';
import { Artist } from './../../models/artist';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  artists: Artist[] = [];
  artistsByVote: Artist[] = [];
  petitions: Petition[] = [];
  petitionForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  newPetition: Petition = new Petition();
  showForm = false;
  showButton = true;

  constructor(
    private artistService: ArtistService,
    private petitionService: PetitionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.artistService.getAll().subscribe((artists) => {
      this.artists = artists;
    });
    this.artistService.getByVotes().subscribe((artistByVote) => {
      this.artistsByVote = artistByVote;
    });
    this.petitionService.getAll().subscribe((petitions) => {
      this.petitions = petitions;
    });
  }

  accessForm() {
    this.showButton = false;
    this.showForm = true;
  }

  onSubmit() {
    this.newPetition.firstName = this.petitionForm.get('firstName').value;
    this.newPetition.lastName = this.petitionForm.get('lastName').value;
    this.petitionService.create(this.newPetition).subscribe(() => {
      this.petitionService.getAll().subscribe((petitions) => {
        this.petitions = petitions;
      });
    });
    this.showButton = true;
    this.showForm = false;
  }
}
