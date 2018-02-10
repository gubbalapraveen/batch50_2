import { TestBed, inject } from '@angular/core/testing';

import { ArthService } from './arth.service';

describe('ArthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArthService]
    });
  });

  it('should be created', inject([ArthService], (service: ArthService) => {
    expect(service).toBeTruthy();
  }));
});
