import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCarehimComponent } from './skin-carehim.component';

describe('SkinCarehimComponent', () => {
  let component: SkinCarehimComponent;
  let fixture: ComponentFixture<SkinCarehimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinCarehimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinCarehimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
