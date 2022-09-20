import { TestBed } from '@angular/core/testing';

import { OnThisDayEventService } from './on-this-day-event.service';

describe('OnThisDayEventService', () => {
  let service: OnThisDayEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnThisDayEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
