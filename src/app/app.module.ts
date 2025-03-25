import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScormUploadComponent } from './components/scorm-upload/scorm-upload/scorm-upload.component';
import { CourseListComponent } from './components/course-list/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { UserProgressComponent } from './components/user-progress/user-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    ScormUploadComponent,
    CourseListComponent,
    SafeUrlPipe,
    UserProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
