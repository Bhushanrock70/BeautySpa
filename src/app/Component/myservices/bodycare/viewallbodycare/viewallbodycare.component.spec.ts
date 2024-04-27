import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbodycareComponent } from './viewallbodycare.component';

describe('ViewallbodycareComponent', () => {
  let component: ViewallbodycareComponent;
  let fixture: ComponentFixture<ViewallbodycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallbodycareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallbodycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
