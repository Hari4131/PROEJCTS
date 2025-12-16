import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallAlertComponent } from './install-alert.component';

describe('InstallAlertComponent', () => {
  let component: InstallAlertComponent;
  let fixture: ComponentFixture<InstallAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
