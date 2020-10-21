import { TestBed } from '@angular/core/testing';

import { CardAPIServiceService } from './card-apiservice.service';

describe('CardAPIServiceService', () => {
  let service: CardAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
