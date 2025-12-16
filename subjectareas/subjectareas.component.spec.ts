import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectareasComponent } from './subjectareas.component';

describe('SubjectareasComponent', () => {
  let component: SubjectareasComponent;
  let fixture: ComponentFixture<SubjectareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
