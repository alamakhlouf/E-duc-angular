import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../CategoryService/category.service';
import { ResourceDataService } from '../../ResourceService/resource-data.service';
import { CourseServiceService } from '../../CourService/course-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cour',
  templateUrl: './create-cour.component.html',
  styleUrls: ['./create-cour.component.scss']
})
export class CreateCourComponent {
  fileSizeLimit = 1024; // In MB
  categoryList:any[]=[]
  selectedFile!: File;
  courseForm: FormGroup;
   imagePreview: string | ArrayBuffer | null = null;
   selectedCategoryName: string | null = null;

   constructor(private fb: FormBuilder,private categoryService:CategoryService,private courService:CourseServiceService,private resource:ResourceDataService,private router:Router) {
      this.courseForm = this.fb.group({
         name: ['', Validators.required],
         description: ['', Validators.required],
         categoryId: ['', Validators.required],
         payed: [false],
         coverpicture: ['']
      });
   }

  onPremiumCourseChange(event: any): void {
    const isChecked = event.target.checked;
    this.courseForm.get('payed')?.setValue(isChecked);
  }

  isPaidChecked(): boolean {
    return this.courseForm.get('payed')?.value || false;
  }
   ngOnInit(): void {
    this.loadCategories();
    this.courseForm.get('category')?.valueChanges.subscribe(value => {
      const category = this.categoryList.find(category => category.idCategory === +value);
          this.selectedCategoryName = category ? category.name : null;
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCat().subscribe(
      (data: any) => {
        this.categoryList = data;

      },
      error => {
        console.error('Erreur lors du chargement des catégories :', error);
      }
    );
  }
   onImageChange(event: Event): void {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = () => {
            this.imagePreview = reader.result;
         };
         reader.readAsDataURL(file);
      }
        if (file) {
          this.selectedFile = file;
          this.courseForm.patchValue({
            coverpicture: file.name});
            console.log("coverPicture",file.name)
        }
   }

   onSubmit(): void {

console.log(this.courseForm.valid);
console.log(this.courseForm.value);

      if (this.courseForm.valid) {
        console.log("hello");
         console.log('Form data: ', this.courseForm.value);
         this.courService.addCour(this.courseForm.value as any).subscribe(
         ()=>{console.log("cour",this.courseForm.value);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cour ajouté avec succés",
            showConfirmButton: false,
            timer: 1500
          });
        this.router.navigate(['/courses'])}
        );
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.resource.uploadFile(this.selectedFile).subscribe(
        response => {
          console.log("fileUploaded") ;
        },
        error => {
          console.error('Error uploading image: ', error);
        }
      );
    }
      }
   }
}
