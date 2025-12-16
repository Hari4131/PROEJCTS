import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalinfrastructureComponent } from './operationalinfrastructure.component';

describe('OperationalinfrastructureComponent', () => {
  let component: OperationalinfrastructureComponent;
  let fixture: ComponentFixture<OperationalinfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalinfrastructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationalinfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
