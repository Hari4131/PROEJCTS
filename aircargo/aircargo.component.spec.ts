import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircargoComponent } from './aircargo.component';

describe('AircargoComponent', () => {
  let component: AircargoComponent;
  let fixture: ComponentFixture<AircargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
