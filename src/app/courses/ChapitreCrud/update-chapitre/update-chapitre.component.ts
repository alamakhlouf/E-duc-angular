import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapitreService } from '../../ChapitreService/chapitre.service';
import { ResourceDataService } from '../../ResourceService/resource-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-chapitre',
  templateUrl: './update-chapitre.component.html',
  styleUrls: ['./update-chapitre.component.scss']
})
export class UpdateChapitreComponent {
  chapterForm!: FormGroup;
  videoPreviewUrl!: string | ArrayBuffer | null;
  pdfPreviewUrl!: string | ArrayBuffer | null;
  id!:number
  chapitre:any
  videoToShow!: string
  pdfFile!: string
  currentId!: number;
  courId!: number;
  constructor(private formBuilder: FormBuilder,private chapitreService:ChapitreService,private act:ActivatedRoute,private resource:ResourceDataService,private router:Router) {
    this.chapterForm = this.formBuilder.group({
      titre: [''],
      videoFile: [''],
      description: [''],
      pdfFile: [''],
      mediaList: this.formBuilder.array([])
    });
  }
  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    this.chapitreService.getChapitreDetails(this.id).subscribe((data: any) => {
      this.chapitre = data.chapitre;
      data.mediaList.forEach((media: { name: string; }) => {
        if (media.name.toLowerCase().endsWith('.mp4')) {
          this.videoToShow = media.name;
        } else if (media.name.toLowerCase().endsWith('.pdf')) {
          this.pdfFile = media.name;
        }
      });

      this.chapterForm = this.formBuilder.group({
        titre: [this.chapitre.titre],
        description: [this.chapitre.description]

      });
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

  update():void{
   this.id=this.act.snapshot.params['id'];
   this.courId=this.act.snapshot.params['courId'];
    this.currentId = +this.courId;
    this.chapitreService.updateChapitre(this.id,this.chapterForm.value).subscribe(
      (data: any) => {
        console.log("chapitre Created",data);
        Swal.fire("Chapitre mis à jour !", "", "success");
        this.router.navigate(['/courses/chapitre/',this.currentId])})

    this.resource.uploadFile(this.chapterForm.get('videoFile')?.value).subscribe(
      (data: any) => {
        console.log("Vido c'est bon");})
    this.resource.uploadFile(this.chapterForm.get('pdfFile')?.value).subscribe(
      (data: any) => {
        console.log("pdf");})

  }
}
