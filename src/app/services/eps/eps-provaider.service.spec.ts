import { TestBed } from '@angular/core/testing';

import { EpsProvaiderService } from './eps-provaider.service';

describe('EpsProvaiderService', () => {
  let service: EpsProvaiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpsProvaiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
