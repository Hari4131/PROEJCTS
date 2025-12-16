import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomacourseComponent } from './diplomacourse.component';

describe('DiplomacourseComponent', () => {
  let component: DiplomacourseComponent;
  let fixture: ComponentFixture<DiplomacourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomacourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomacourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
