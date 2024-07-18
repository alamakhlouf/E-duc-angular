import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forum-delete',
  templateUrl: './forum-delete.component.html',
  styleUrls: ['./forum-delete.component.scss']
})
export class ForumDeleteComponent {

  constructor(public dialogRef: MatDialogRef<ForumDeleteComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    // Appel de votre service pour supprimer le forum
    // Exemple :
    // this.forumService.deleteForum(forumId).subscribe(() => {
    //   this.dialogRef.close(true);
    // });
    this.dialogRef.close(true); // Fermer avec true pour les besoins du démo
  }

}
