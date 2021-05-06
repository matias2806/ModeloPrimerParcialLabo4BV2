import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionRepartidorComponent } from './informacion-repartidor.component';

describe('InformacionRepartidorComponent', () => {
  let component: InformacionRepartidorComponent;
  let fixture: ComponentFixture<InformacionRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
