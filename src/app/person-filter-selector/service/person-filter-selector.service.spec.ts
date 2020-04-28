import { TestBed } from '@angular/core/testing';

import { PersonFilterSelectorService } from './person-filter-selector.service';

describe('PersonFilterSelectorService', () => {
  let service: PersonFilterSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonFilterSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
