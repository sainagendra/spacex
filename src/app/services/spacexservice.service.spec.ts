import { TestBed } from '@angular/core/testing';

import { SpacexserviceService } from './spacexservice.service';

describe('SpacexserviceService', () => {
  let service: SpacexserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
