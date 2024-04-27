import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairCareHimComponent } from './hair-care-him.component';

describe('HairCareHimComponent', () => {
  let component: HairCareHimComponent;
  let fixture: ComponentFixture<HairCareHimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairCareHimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairCareHimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
