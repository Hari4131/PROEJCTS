import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuppdfComponent } from './popuppdf.component';

describe('PopuppdfComponent', () => {
  let component: PopuppdfComponent;
  let fixture: ComponentFixture<PopuppdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopuppdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopuppdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
