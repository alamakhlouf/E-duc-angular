import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapitreService } from '../../ChapitreService/chapitre.service';
import { ResourceDataService } from '../../ResourceService/resource-data.service';

@Component({
  selector: 'app-chapitre-details',
  templateUrl: './chapitre-details.component.html',
  styleUrls: ['./chapitre-details.component.scss']
})
export class ChapitreDetailsComponent {
  uploadResponse!: string;
  id!: number;
  selectedFile!: File;
  chapitre: any;
  mediaList: any[] = [];
  videoToshow!:string
  pdfFile!:string
  showSkipButton: boolean = false;
  videoDuration: number = 0;
  userId: string = '1';

  constructor(private imageUploadService: ResourceDataService,private http:HttpClient,private chapitreservice:ChapitreService,private act:ActivatedRoute,private router:Router) {
    this.id=this.act.snapshot.params['id'];
  }
  ngOnInit(): void {

    this.setupVideoListener();
    console.log("from init",this.id );
    this.chapitreservice.getChapitreDetails(this.id).subscribe((data: any) => {
      this.chapitre = data.chapitre;
      this.mediaList = data.mediaList;
      console.log(this.mediaList)
      this.mediaList.forEach(media => {
        if((media.name).toLowerCase().endsWith('.mp4')) {
          this.videoToshow=media.name
        }
        else{this.pdfFile=media.name}

        console.log(media.name); // Exemple: affichage du nom du média
      });

    });
  }

  downloadPdf(): void {
     // Nom du fichier à télécharger
    this.imageUploadService.getPdf(this.pdfFile).subscribe(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = this.pdfFile;
      link.click();
    }, error => {
      console.error('Erreur lors du téléchargement du fichier :', error);
    });
  }
  setupVideoListener(): void {
    const videoElement = document.getElementById('video') as HTMLVideoElement;

    if (videoElement) {
      // Obtenez la durée totale de la vidéo
      videoElement.addEventListener('loadedmetadata', () => {
        this.videoDuration = videoElement.duration;
      });

      videoElement.addEventListener('timeupdate', () => {
        // Calculez 80 % de la durée totale
        const threshold = this.videoDuration * 0.01;

        // Affichez le bouton si le temps actuel dépasse le seuil
        if (videoElement.currentTime > threshold) {
          this.showSkipButton = true;
        }
      });
    }
  }

  goToNextChapter() {
    if (this.chapitre && this.chapitre.indexChapitre + 1) {
      console.log("chapitre ",this.chapitre.idChapitre);
      this.chapitreservice.addChapitreAssignment(this.chapitre.idChapitre, this.userId).subscribe((response) => {
      console.log("Ajouuut",response);
        console.log("Assignation", response.idChapitre);
        this.router.navigate(['/courses/chapitreDetails/', response.idChapitre]);
        this.id = response.idChapitre
      this.ngOnInit();
      });
    }
  }
}
