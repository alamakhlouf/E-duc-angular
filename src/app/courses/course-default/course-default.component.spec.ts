import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDefaultComponent } from './course-default.component';

describe('CourseDefaultComponent', () => {
  let component: CourseDefaultComponent;
  let fixture: ComponentFixture<CourseDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDefaultComponent]
    });
    fixture = TestBed.createComponent(CourseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
