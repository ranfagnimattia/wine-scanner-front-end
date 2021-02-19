import { TestBed } from '@angular/core/testing';

import { HttpclientrequesterService } from './httpclientrequester.service';

describe('HttpclientrequesterService', () => {
  let service: HttpclientrequesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpclientrequesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
