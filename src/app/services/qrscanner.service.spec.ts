import { TestBed } from '@angular/core/testing';

import { QrscannerService } from './qrscanner.service';

describe('QrscannerService', () => {
  let service: QrscannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrscannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
