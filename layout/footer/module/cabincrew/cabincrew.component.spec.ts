import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabincrewComponent } from './cabincrew.component';

describe('CabincrewComponent', () => {
  let component: CabincrewComponent;
  let fixture: ComponentFixture<CabincrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabincrewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabincrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
