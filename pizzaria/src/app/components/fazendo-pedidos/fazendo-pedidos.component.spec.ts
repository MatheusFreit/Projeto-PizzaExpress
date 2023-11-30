import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendoPedidosComponent } from './fazendo-pedidos.component';

describe('FazendoPedidosComponent', () => {
  let component: FazendoPedidosComponent;
  let fixture: ComponentFixture<FazendoPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FazendoPedidosComponent]
    });
    fixture = TestBed.createComponent(FazendoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
