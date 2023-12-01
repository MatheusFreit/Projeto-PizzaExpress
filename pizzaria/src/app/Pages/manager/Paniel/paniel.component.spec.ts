import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanielComponent } from './paniel.component';

describe('PanielComponent', () => {
  let component: PanielComponent;
  let fixture: ComponentFixture<PanielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanielComponent]
    });
    fixture = TestBed.createComponent(PanielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
