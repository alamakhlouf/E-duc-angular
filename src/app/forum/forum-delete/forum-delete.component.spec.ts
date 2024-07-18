import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDeleteComponent } from './forum-delete.component';

describe('ForumDeleteComponent', () => {
  let component: ForumDeleteComponent;
  let fixture: ComponentFixture<ForumDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumDeleteComponent]
    });
    fixture = TestBed.createComponent(ForumDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
