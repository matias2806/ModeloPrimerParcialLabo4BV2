import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPizzaComponent } from './tabla-pizza.component';

describe('TablaPizzaComponent', () => {
  let component: TablaPizzaComponent;
  let fixture: ComponentFixture<TablaPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
