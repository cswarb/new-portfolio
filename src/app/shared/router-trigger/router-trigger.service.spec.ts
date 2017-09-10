import { TestBed, inject } from '@angular/core/testing';

import { RouterTriggerService } from './router-trigger.service';

describe('RouterTriggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterTriggerService]
    });
  });

  it('should be created', inject([RouterTriggerService], (service: RouterTriggerService) => {
    expect(service).toBeTruthy();
  }));
});
