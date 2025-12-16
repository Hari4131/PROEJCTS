import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewloginpasswordComponent } from './newloginpassword.component';

describe('NewloginpasswordComponent', () => {
  let component: NewloginpasswordComponent;
  let fixture: ComponentFixture<NewloginpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewloginpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewloginpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
