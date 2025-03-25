import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScormUploadComponent } from './components/scorm-upload/scorm-upload/scorm-upload.component';

const routes: Routes = [
  { path: '', component: ScormUploadComponent },
  { path: 'scorm/:courseName', component: ScormUploadComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}