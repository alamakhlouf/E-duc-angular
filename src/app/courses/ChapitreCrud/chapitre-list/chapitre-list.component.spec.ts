import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreListComponent } from './chapitre-list.component';

describe('ChapitreListComponent', () => {
  let component: ChapitreListComponent;
  let fixture: ComponentFixture<ChapitreListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapitreListComponent]
    });
    fixture = TestBed.createComponent(ChapitreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
