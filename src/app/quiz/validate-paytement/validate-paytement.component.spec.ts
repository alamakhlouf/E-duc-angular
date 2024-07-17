import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatePaytementComponent } from './validate-paytement.component';

describe('ValidatePaytementComponent', () => {
  let component: ValidatePaytementComponent;
  let fixture: ComponentFixture<ValidatePaytementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatePaytementComponent]
    });
    fixture = TestBed.createComponent(ValidatePaytementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
