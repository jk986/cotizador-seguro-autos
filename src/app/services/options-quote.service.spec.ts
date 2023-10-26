import { TestBed } from '@angular/core/testing';

import { OptionsQuoteService } from './options-quote.service';

describe('OptionsQuoteService', () => {
  let service: OptionsQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
