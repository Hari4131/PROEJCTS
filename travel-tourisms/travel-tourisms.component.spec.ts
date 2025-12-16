import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTourismsComponent } from './travel-tourisms.component';

describe('TravelTourismsComponent', () => {
  let component: TravelTourismsComponent;
  let fixture: ComponentFixture<TravelTourismsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelTourismsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelTourismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
