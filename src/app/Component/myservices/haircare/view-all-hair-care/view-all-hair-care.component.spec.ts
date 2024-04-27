import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllHairCareComponent } from './view-all-hair-care.component';

describe('ViewAllHairCareComponent', () => {
  let component: ViewAllHairCareComponent;
  let fixture: ComponentFixture<ViewAllHairCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllHairCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllHairCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
