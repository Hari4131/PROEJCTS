import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmembersComponent } from './ourmembers.component';

describe('OurmembersComponent', () => {
  let component: OurmembersComponent;
  let fixture: ComponentFixture<OurmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurmembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
