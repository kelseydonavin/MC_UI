import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoginPageComponent } from './create-login-page.component';

describe('CreateLoginPageComponent', () => {
  let component: CreateLoginPageComponent;
  let fixture: ComponentFixture<CreateLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
