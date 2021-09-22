import { TestBed } from '@angular/core/testing';

import { LibrarydataService } from './librarydata.service';

describe('LibrarydataService', () => {
  let service: LibrarydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
