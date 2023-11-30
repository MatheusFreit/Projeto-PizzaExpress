import { TestBed } from '@angular/core/testing';

import { pedidosServiceService } from './pedidos.service';

describe('ServicesService', () => {
  let service: pedidosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pedidosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
