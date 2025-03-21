import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScormServiceService {
  private baseUrl = 'http://localhost:8080/api/scorm';
  constructor(private http: HttpClient) { }
  uploadScormPackage(formData: FormData) {
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  getScormCourses() {
    return this.http.get(`${this.baseUrl}/courses`);
  }
}
