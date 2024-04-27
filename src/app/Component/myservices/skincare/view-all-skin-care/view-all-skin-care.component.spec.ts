import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSkinCareComponent } from './view-all-skin-care.component';

describe('ViewAllSkinCareComponent', () => {
  let component: ViewAllSkinCareComponent;
  let fixture: ComponentFixture<ViewAllSkinCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllSkinCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllSkinCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
