import { TestBed } from '@angular/core/testing';

import { MensajeContactenosService } from './mensaje-contactenos.service';

describe('MensajeContactenosService', () => {
  let service: MensajeContactenosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeContactenosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
