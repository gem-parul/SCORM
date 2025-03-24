import { Component, OnInit } from '@angular/core';
import { ScormServiceService } from '../../../services/scorm-service/scorm-service.service';
@Component({
  selector: 'app-scorm-upload',
  templateUrl: './scorm-upload.component.html',
  styleUrls: ['./scorm-upload.component.scss']
})
export class ScormUploadComponent implements OnInit {
  selectedFile: File | null = null;
  message: string = '';
  courses: any[] = [];
selectedCourseUrl: string = '';
  constructor(private scormService: ScormServiceService) { }

  ngOnInit(): void {
    this.fetchCourses();

  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.zip')) {
      this.selectedFile = file;
      this.message = '';
    } else {
      this.message = 'Only .zip files are allowed!';
    }
  }

  uploadFile() {
    if (!this.selectedFile) {
      this.message = 'Please select a file first.';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.scormService.uploadScormPackage(formData).subscribe({
      next: (res: any) => this.message = res,
      error: () => this.message = 'Upload failed. Please try again.'
    });
  }
  fetchCourses() {
    this.scormService.getScormCourses().subscribe(data => {
      if (Array.isArray(data)) {
        this.courses = data;
      } else {
        console.error('Expected an array but got:', data);
      }
    });
  }
  
  launchCourse(course: any) {
    this.selectedCourseUrl = `http://localhost:8080/scorm-content/${course.courseName}/index.html`;
  }
  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   this.scormService.uploadScormPackage(formData).subscribe(response => {
  //     console.log(response);
  //   });
  // }
}
