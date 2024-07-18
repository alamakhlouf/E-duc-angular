import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassQuizComponent } from './pass-quiz.component';

describe('PassQuizComponent', () => {
  let component: PassQuizComponent;
  let fixture: ComponentFixture<PassQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassQuizComponent]
    });
    fixture = TestBed.createComponent(PassQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
