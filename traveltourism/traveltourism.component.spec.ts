import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveltourismComponent } from './traveltourism.component';

describe('TraveltourismComponent', () => {
  let component: TraveltourismComponent;
  let fixture: ComponentFixture<TraveltourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraveltourismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraveltourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
