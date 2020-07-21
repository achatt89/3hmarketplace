import { TestBed } from '@angular/core/testing';

import { MarketplaceCrudService } from './marketplace-crud.service';

describe('MarketplaceCrudService', () => {
  let service: MarketplaceCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketplaceCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
