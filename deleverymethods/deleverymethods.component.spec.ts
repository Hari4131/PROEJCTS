import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleverymethodsComponent } from './deleverymethods.component';

describe('DeleverymethodsComponent', () => {
  let component: DeleverymethodsComponent;
  let fixture: ComponentFixture<DeleverymethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleverymethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleverymethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
