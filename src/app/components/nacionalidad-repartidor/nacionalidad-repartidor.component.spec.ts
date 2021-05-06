import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalidadRepartidorComponent } from './nacionalidad-repartidor.component';

describe('NacionalidadRepartidorComponent', () => {
  let component: NacionalidadRepartidorComponent;
  let fixture: ComponentFixture<NacionalidadRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalidadRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalidadRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
