import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionActorComponent } from './informacion-actor.component';

describe('InformacionActorComponent', () => {
  let component: InformacionActorComponent;
  let fixture: ComponentFixture<InformacionActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
