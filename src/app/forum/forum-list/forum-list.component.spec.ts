import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForumListComponent } from './forum-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importation du module de test HTTP

describe('ForumListComponent', () => {
  let component: ForumListComponent;
  let fixture: ComponentFixture<ForumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumListComponent ],
      imports: [ HttpClientTestingModule ] // Importez les modules nécessaires pour votre test ici
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Ajoutez d'autres tests ici selon les fonctionnalités de votre ForumListComponent
});
