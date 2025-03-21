import { TestBed } from '@angular/core/testing';

import { ScormServiceService } from './scorm-service.service';

describe('ScormServiceService', () => {
  let service: ScormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
