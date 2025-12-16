import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingpartnersComponent } from './trainingpartners.component';

describe('TrainingpartnersComponent', () => {
  let component: TrainingpartnersComponent;
  let fixture: ComponentFixture<TrainingpartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingpartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
