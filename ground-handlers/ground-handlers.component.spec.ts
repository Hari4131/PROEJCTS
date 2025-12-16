import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundHandlersComponent } from './ground-handlers.component';

describe('GroundHandlersComponent', () => {
  let component: GroundHandlersComponent;
  let fixture: ComponentFixture<GroundHandlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundHandlersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
