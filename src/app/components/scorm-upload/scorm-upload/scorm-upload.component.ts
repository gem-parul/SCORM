import { Component, OnInit } from '@angular/core';
import { ScormServiceService } from '../../../services/scorm-service/scorm-service.service';
@Component({
  selector: 'app-scorm-upload',
  templateUrl: './scorm-upload.component.html',
  styleUrls: ['./scorm-upload.component.scss']
})
export class ScormUploadComponent implements OnInit {

  constructor(private scormService: ScormServiceService) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.scormService.uploadScormPackage(formData).subscribe(response => {
      console.log(response);
    });
  }
}
