import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapitreService } from '../../ChapitreService/chapitre.service';
import { ResourceDataService } from '../../ResourceService/resource-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-chapitre',
  templateUrl: './create-chapitre.component.html',
  styleUrls: ['./create-chapitre.component.scss']
})
export class CreateChapitreComponent {
  chapterForm!: FormGroup;
  videoPreviewUrl!: string | ArrayBuffer | null;
  pdfPreviewUrl!: string | ArrayBuffer | null;
  id!:number
  videoDuration: number = 0;
  roundedVideoDuration: number = 0;
  constructor(private formBuilder: FormBuilder,private chapitreService:ChapitreService,private act:ActivatedRoute,private resource:ResourceDataService,private router:Router) {
    this.chapterForm = this.formBuilder.group({
      titre: [''],
      videoFile: [''],
      description: [''],
      pdfFile: [''],
      duration: [''],
      mediaList: this.formBuilder.array([])
    });
  }
  get mediaList(): FormArray {
    return this.chapterForm.get('mediaList') as FormArray;
  }

onVideoFileChange(event: any) {
    const file = event.target.files[0];
    this.chapterForm.patchValue({ videoFile: file });
    this.chapterForm.get('videoFile')?.updateValueAndValidity();
    this.chapterForm.patchValue({
      videoFile: file})
      this.mediaList.push(new FormControl({ name: file.name }));
    // Preview video
    const reader = new FileReader();
    reader.onload = () => {
      this.videoPreviewUrl = reader.result;
    };
    reader.readAsDataURL(file);
    // Obtenez la durée totale de la vidéo
    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(file);

    videoElement.addEventListener('loadedmetadata', () => {
      const videoDuration = videoElement.duration;
      const minutes = Math.floor(videoDuration / 60);
      const seconds = Math.floor(videoDuration % 60);
      const formattedDuration = `${minutes}.${seconds < 10 ? '0' : ''}${seconds}`;

      this.chapterForm.patchValue({
        duration: formattedDuration
      });

      console.log("Durée de la vidéo:", formattedDuration);
    });
  }

  onPdfFileChange(event: any) {
    const file = event.target.files[0];
    this.chapterForm.patchValue({ pdfFile: file });
    this.chapterForm.get('pdfFile')?.updateValueAndValidity();
    this.chapterForm.patchValue({
      pdfFile: file})
      this.mediaList.push(new FormControl({ name: file.name }));
    // Preview PDF
    const reader = new FileReader();
    reader.onload = () => {
      this.pdfPreviewUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  save():void{
   this.id=this.act.snapshot.params['id'];
   console.log("chapitre",this.chapterForm.value);

    this.chapitreService.addChapitre(this.id,this.chapterForm.value).subscribe(
      (data: any) => {
        Swal.fire("Chapitre crée !", "", "success");
        this.router.navigate(['/courses/chapitre/',this.id])
      })

    this.resource.uploadFile(this.chapterForm.get('videoFile')?.value).subscribe(
      (data: any) => {
        console.log("Vido c'est bon");})
    this.resource.uploadFile(this.chapterForm.get('pdfFile')?.value).subscribe(
      (data: any) => {
        console.log("pdf");})

  }
}
