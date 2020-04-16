import { TestBed } from '@angular/core/testing';

import { bitcoinService } from './user.service';

describe('bitcoinService', () => {
  let service: bitcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(bitcoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
