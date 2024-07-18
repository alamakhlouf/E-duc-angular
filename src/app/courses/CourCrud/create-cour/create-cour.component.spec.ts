import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourComponent } from './create-cour.component';

describe('CreateCourComponent', () => {
  let component: CreateCourComponent;
  let fixture: ComponentFixture<CreateCourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCourComponent]
    });
    fixture = TestBed.createComponent(CreateCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
