import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCareHimComponent } from './body-care-him.component';

describe('BodyCareHimComponent', () => {
  let component: BodyCareHimComponent;
  let fixture: ComponentFixture<BodyCareHimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCareHimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCareHimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
