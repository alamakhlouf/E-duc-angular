import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDefaultComponent } from './quiz-default.component';

describe('QuizDefaultComponent', () => {
  let component: QuizDefaultComponent;
  let fixture: ComponentFixture<QuizDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizDefaultComponent]
    });
    fixture = TestBed.createComponent(QuizDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
