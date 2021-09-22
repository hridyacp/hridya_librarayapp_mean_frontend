import { TestBed } from '@angular/core/testing';

import { RoleadGuard } from './rolead.guard';

describe('RoleadGuard', () => {
  let guard: RoleadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
