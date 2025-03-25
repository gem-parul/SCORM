import { Component, Input, OnInit } from '@angular/core';
import { ScormServiceService } from 'src/app/services/scorm-service/scorm-service.service';
declare var SCORM: any;

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.scss'],
})

export class UserProgressComponent implements OnInit {
  @Input() launchUrl!: string;
  @Input() userId!: number;
  @Input() courseId!: number;

  constructor(private progressService: ScormServiceService) {}

  ngOnInit(): void {
    this.initializeScormTracking();
  }

  initializeScormTracking(): void {
    window.onbeforeunload = () => this.sendProgress(); // Save progress when user leaves page
  }

  sendProgress(): void {
    const status = SCORM.GetValue("cmi.core.lesson_status"); // e.g., "completed", "incomplete"
    const score = parseInt(SCORM.GetValue("cmi.core.score.raw") || '0', 10); // SCORM score
    const time = SCORM.GetValue("cmi.core.total_time"); // SCORM total time format

    this.progressService.saveProgress(this.userId, this.courseId, status, score, time)
      .subscribe((response:any) => console.log('Progress saved:', response),
                 (error:any) => console.error('Error saving progress:', error));
  }
  // userId = 1; 
  // progressData: any[] = [
  //   {
  //     courseName: 'Course 1',
  //     progress: 10,
  //     score: 0,
  //     totalTime: 0,
  //     lastAccessed: '',
  //   },
  //   {
  //     courseName: 'Course 2',
  //     progress: 0,
  //     score: 0,
  //     totalTime: 0,
  //     lastAccessed: '',
  //   },
  // ];//dummy data 
  // loading = true;
  // error = '';

  // constructor(private scormService: ScormServiceService) {}

  // ngOnInit(): void {
  //   // this.loading = false;
  // }
  // fetchProgressData() {
  //   this.scormService.getUserProgress(this.userId).subscribe({
  //     next: (data: any) => {
  //       this.progressData = data;
  //       this.loading = false;
  //     },
  //     error: (err: any) => {
  //       this.error = 'Failed to load progress';
  //       this.loading = false;
  //     },
  //   });
  // }
}
