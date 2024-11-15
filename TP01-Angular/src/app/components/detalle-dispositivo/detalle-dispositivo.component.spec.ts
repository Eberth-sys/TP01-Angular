import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDispositivoComponent } from './detalle-dispositivo.component';

describe('DetalleDispositivoComponent', () => {
  let component: DetalleDispositivoComponent;
  let fixture: ComponentFixture<DetalleDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDispositivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
