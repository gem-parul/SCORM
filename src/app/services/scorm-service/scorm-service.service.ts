import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScormServiceService {
  private baseUrl = 'http://localhost:8080/api/scorm';

  constructor(private http: HttpClient) {}

  uploadScormPackage(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, formData, { responseType: 'text' });
  }

  getScormCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/courses`);
  }

}
