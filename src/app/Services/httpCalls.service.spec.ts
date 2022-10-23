/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpCallsService } from './httpCalls.service';

describe('Service: HttpCalls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCallsService]
    });
  });

  it('should ...', inject([HttpCallsService], (service: HttpCallsService) => {
    expect(service).toBeTruthy();
  }));
});
