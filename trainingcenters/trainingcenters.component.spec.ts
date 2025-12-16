import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingcentersComponent } from './trainingcenters.component';

describe('TrainingcentersComponent', () => {
  let component: TrainingcentersComponent;
  let fixture: ComponentFixture<TrainingcentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingcentersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
