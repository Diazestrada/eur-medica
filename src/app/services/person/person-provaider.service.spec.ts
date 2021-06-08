import { TestBed } from '@angular/core/testing';

import { PersonProvaiderService } from './person-provaider.service';

describe('PersonProvaiderService', () => {
  let service: PersonProvaiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonProvaiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
