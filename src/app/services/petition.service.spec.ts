import { TestBed } from '@angular/core/testing';

import { PetitionService } from './petition.service';

describe('PetitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetitionService = TestBed.get(PetitionService);
    expect(service).toBeTruthy();
  });
});
