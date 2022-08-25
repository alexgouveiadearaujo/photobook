import { TestBed } from '@angular/core/testing';

import { PhotographsService } from './photographs.service';

describe('PhotographsService', () => {
  let service: PhotographsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotographsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
