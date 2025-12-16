import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesDUPComponent } from './franchises-dup.component';

describe('FranchisesDUPComponent', () => {
  let component: FranchisesDUPComponent;
  let fixture: ComponentFixture<FranchisesDUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchisesDUPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranchisesDUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
