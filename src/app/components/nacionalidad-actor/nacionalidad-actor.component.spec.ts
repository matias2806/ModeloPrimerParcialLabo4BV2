import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalidadActorComponent } from './nacionalidad-actor.component';

describe('NacionalidadActorComponent', () => {
  let component: NacionalidadActorComponent;
  let fixture: ComponentFixture<NacionalidadActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalidadActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalidadActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
