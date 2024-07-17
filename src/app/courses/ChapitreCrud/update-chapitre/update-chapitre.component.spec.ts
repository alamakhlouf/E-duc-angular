import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChapitreComponent } from './update-chapitre.component';

describe('UpdateChapitreComponent', () => {
  let component: UpdateChapitreComponent;
  let fixture: ComponentFixture<UpdateChapitreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateChapitreComponent]
    });
    fixture = TestBed.createComponent(UpdateChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
