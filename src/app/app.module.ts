import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScormUploadComponent } from './components/scorm-upload/scorm-upload/scorm-upload.component';
import { CourseListComponent } from './components/course-list/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ScormUploadComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
