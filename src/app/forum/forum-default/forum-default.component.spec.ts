import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDefaultComponent } from './forum-default.component';

describe('ForumDefaultComponent', () => {
  let component: ForumDefaultComponent;
  let fixture: ComponentFixture<ForumDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumDefaultComponent]
    });
    fixture = TestBed.createComponent(ForumDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
