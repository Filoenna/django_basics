import { TestBed } from '@angular/core/testing';

import { Specification } from './specification';

describe('Specification', () => {
  let service: Specification;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Specification);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
