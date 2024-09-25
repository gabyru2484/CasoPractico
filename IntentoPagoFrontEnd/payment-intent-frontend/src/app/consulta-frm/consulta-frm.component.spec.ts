import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFrmComponent } from './consulta-frm.component';

describe('ConsultaFrmComponent', () => {
  let component: ConsultaFrmComponent;
  let fixture: ComponentFixture<ConsultaFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaFrmComponent]
    });
    fixture = TestBed.createComponent(ConsultaFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
