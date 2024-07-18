import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDefaultComponent } from './users-default.component';

describe('UsersDefaultComponent', () => {
  let component: UsersDefaultComponent;
  let fixture: ComponentFixture<UsersDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDefaultComponent]
    });
    fixture = TestBed.createComponent(UsersDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
