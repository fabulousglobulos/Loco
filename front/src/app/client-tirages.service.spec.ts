import { TestBed } from '@angular/core/testing';

import { ClientTiragesService } from './client-tirages.service';

describe('ClientTiragesService', () => {
  let service: ClientTiragesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientTiragesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
