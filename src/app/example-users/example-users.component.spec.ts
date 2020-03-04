import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUsersComponent } from './example-users.component';

describe('ExampleUsersComponent', () => {
  let component: ExampleUsersComponent;
  let fixture: ComponentFixture<ExampleUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
