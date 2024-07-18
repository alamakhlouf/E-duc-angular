import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPaytementComponent } from './cancel-paytement.component';

describe('CancelPaytementComponent', () => {
  let component: CancelPaytementComponent;
  let fixture: ComponentFixture<CancelPaytementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelPaytementComponent]
    });
    fixture = TestBed.createComponent(CancelPaytementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
