import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairPricetagComponent } from './hair-pricetag.component';

describe('HairPricetagComponent', () => {
  let component: HairPricetagComponent;
  let fixture: ComponentFixture<HairPricetagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairPricetagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairPricetagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
