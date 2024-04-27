import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairDashboardComponent } from './hair-dashboard.component';

describe('HairDashboardComponent', () => {
  let component: HairDashboardComponent;
  let fixture: ComponentFixture<HairDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
