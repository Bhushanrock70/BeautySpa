import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkindashboardComponent } from './skindashboard.component';

describe('SkindashboardComponent', () => {
  let component: SkindashboardComponent;
  let fixture: ComponentFixture<SkindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkindashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
