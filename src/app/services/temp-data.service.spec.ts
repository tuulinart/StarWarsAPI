import { TestBed } from '@angular/core/testing';

import { TempDataService } from './temp-data.service';

describe('TempDataService', () => {
  let service: TempDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
