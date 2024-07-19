import { Component } from '@angular/core';
import { CourseServiceService } from '../CourService/course-service.service';
import { CategoryService } from '../CategoryService/category.service';
import { HttpClient } from '@angular/common/http';
import { ResourceDataService } from '../ResourceService/resource-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-default',
  templateUrl: './course-default.component.html',
  styleUrls: ['./course-default.component.scss']
})
export class CourseDefaultComponent {
  listCategory: any[] = [];
  listCour: any[] = [];
  categoryCount!: number;
  searchKey: string = '';
  currentPage: number = 0;
  pagee: number = 0;
  pageSize: number = 4;
  totalPages: number = 0;
  totalPagesArray: number[] = [];
  selectedCategory: any = null;
  imagePath!: string;
  imageToShow: any;
  courCount!: number;

  constructor(
    private categoryService: CategoryService,
    private courService: CourseServiceService,
    private http: HttpClient,
    private ressource: ResourceDataService
  ) { }

  ngOnInit(): void {
    this.loadCategories(0, 7, '');
    this.loadCours(this.currentPage, this.pageSize);


  }

  loadCategories(page: number, size: number, key: string): void {
    this.categoryService.getAllCategory(page, size, key).subscribe(
      (data: any) => {
        this.listCategory = data.categoryResponseBodyList;
        this.categoryCount = data.categoryCount;

      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  loadCours(page: number, size: number): void {
    this.courService.getCour(page, size).subscribe(
      (data: any) => {
        this.listCour = data.courResponseBodyList;
        this.courCount = data.courCount;
        this.totalPages = Math.ceil(this.courCount / this.pageSize);
        this.totalPagesArray = new Array(this.totalPages).fill(0).map((_, index) => index + 1);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
  selectCategory(category: any): void {
    if (this.selectedCategory === category) {
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category;
    }
  }

  filterCourses(categoryCode: string): void {
    if (categoryCode === 'all') {
      this.ngOnInit();
    } else {
      this.http.get(`http://localhost:8081/cours/getAllCourByCategory/${categoryCode}`).subscribe(
        (data: any) => {
          this.listCour = data;
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }
  pagination(page: number): void {
    this.currentPage = page - 1;
    this.ngOnInit();

  }
}
