import { TestBed } from '@angular/core/testing';

import { ReasonswhyService } from './reasonswhy.service';

describe('ReasonswhyService', () => {
  let service: ReasonswhyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReasonswhyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
