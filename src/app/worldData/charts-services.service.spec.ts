import { TestBed } from '@angular/core/testing';

import { ChartsServicesService } from './charts-services.service';

describe('ChartsServicesService', () => {
  let service: ChartsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
