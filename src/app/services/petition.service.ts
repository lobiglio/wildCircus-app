import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Petition } from '../models/petition';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  static URL = 'http://localhost:3000/petitions';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Petition[]> {
    return this.http.get(PetitionService.URL)
      .pipe(map(this.convertDataFromServerToPetitions));
  }

  private convertDataFromServerToPetitions(petitions: any[]): Petition[] {
    return petitions.map(petition => new Petition(petition));
  }
}
