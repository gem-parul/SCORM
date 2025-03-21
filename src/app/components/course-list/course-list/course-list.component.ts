import { Component, OnInit } from '@angular/core';
import { ScormServiceService } from 'src/app/services/scorm-service/scorm-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];

  constructor(private scormService: ScormServiceService) { }

  ngOnInit(): void {
    this.scormService.getScormCourses().subscribe(data => {
      this.courses = data as any[];
    });
  }

}
