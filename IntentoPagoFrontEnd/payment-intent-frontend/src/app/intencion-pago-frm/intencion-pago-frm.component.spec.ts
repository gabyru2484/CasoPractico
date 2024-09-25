import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntencionPagoFrmComponent } from './intencion-pago-frm.component';

describe('IntencionPagoFrmComponent', () => {
  let component: IntencionPagoFrmComponent;
  let fixture: ComponentFixture<IntencionPagoFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntencionPagoFrmComponent]
    });
    fixture = TestBed.createComponent(IntencionPagoFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
