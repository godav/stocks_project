import { TestBed, inject } from '@angular/core/testing';

import { StocksSrvService } from './stocks-srv.service';

describe('StocksSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StocksSrvService]
    });
  });

  it('should be created', inject([StocksSrvService], (service: StocksSrvService) => {
    expect(service).toBeTruthy();
  }));
});
