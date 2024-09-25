import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFrmComponent } from './inicio-frm.component';

describe('InicioFrmComponent', () => {
  let component: InicioFrmComponent;
  let fixture: ComponentFixture<InicioFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioFrmComponent]
    });
    fixture = TestBed.createComponent(InicioFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
