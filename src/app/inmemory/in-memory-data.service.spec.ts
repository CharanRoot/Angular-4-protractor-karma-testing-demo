
import { TestBed, async, inject } from '@angular/core/testing';
import { InMemoryDataService } from './in-memory-data.service';

describe('Service: InMemoryData testing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataService]
    });
  });

  it('should ...', inject([InMemoryDataService], (service: InMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
