import { TestBed } from '@angular/core/testing';

import { AppMessageService } from './appmessages.service';

describe('AppmessagesService', () => {
  let service: AppMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
