import { Component } from '@angular/core';
import { ChapitreService } from '../../ChapitreService/chapitre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapitre-list',
  templateUrl: './chapitre-list.component.html',
  styleUrls: ['./chapitre-list.component.scss']
})
export class ChapitreListComponent {
  id!:number
  currentId!: number;
  listChapitre: any[] = [];
  selectedChapitre: any = null;
  modalAction: 'edit' | 'delete' | null = null;
  currentUserId: string = '1'; // Assurez-vous d'obtenir l'ID utilisateur actuel correctement
  chapitreStatus: { [key: number]: boolean } = {};
  constructor(private ch: ChapitreService,private act:ActivatedRoute) {}
  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.currentId = +this.id;
this.ch.getAllCour(this.id).subscribe(
      (data: any) => {
        this.listChapitre = data;
        console.log(this.listChapitre);
        this.listChapitre.forEach((chapitre) => {

          this.ch.checkChapitreStatus(chapitre.idChapitre, this.currentUserId)
            .subscribe(response => {
              this.chapitreStatus[chapitre.idChapitre] = response === 'ouvert';
              console.log("chapitre",chapitre.idChapitre);
              console.log("index",chapitre.indexChapitre);
              console.log("response",response);
              console.log("statuss",this.chapitreStatus[chapitre.idChapitre] = response === 'ouvert');

              });
        });

    })


}
getRouterLink(chapitre: any): any[] | null {
  if (this.chapitreStatus[chapitre.idChapitre] || chapitre.indexChapitre === 1) {
    return ['/courses/chapitreDetails', chapitre.idChapitre];
  }
  return null;
}
toggleDropdown(chapitreId: number): void {
  const dropdown = document.getElementById(`dropdown-${chapitreId}`);
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
}

editChapitre(chapitre: any): void {
  // Implémentez la logique pour l'édition du chapitre
  console.log('Éditer le chapitre:', chapitre);
}

deleteChapitre(chapitre: any): void {
  console.log("idChapitre",chapitre);
  this.ch.deleteChapitre(chapitre).subscribe(
    (data: any) => {
      console.log("deletedd");})
  // Implémentez la logique pour la suppression du chapitre
  console.log('Supprimer le chapitre:', chapitre);
}
}
