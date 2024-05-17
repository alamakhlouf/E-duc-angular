import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTrainingDefaultComponent } from './event-training-default.component';

describe('EventTrainingDefaultComponent', () => {
  let component: EventTrainingDefaultComponent;
  let fixture: ComponentFixture<EventTrainingDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventTrainingDefaultComponent]
    });
    fixture = TestBed.createComponent(EventTrainingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
