import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationVideosComponent } from './aviation-videos.component';

describe('AviationVideosComponent', () => {
  let component: AviationVideosComponent;
  let fixture: ComponentFixture<AviationVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviationVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AviationVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
