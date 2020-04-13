import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueMetricPageComponent } from './unique-metric-page.component';

describe('UniqueMetricPageComponent', () => {
  let component: UniqueMetricPageComponent;
  let fixture: ComponentFixture<UniqueMetricPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueMetricPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueMetricPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
