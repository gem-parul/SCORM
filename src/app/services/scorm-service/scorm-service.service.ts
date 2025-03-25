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
  // saveProgress(userId: number, courseId: number, status: string, score: number, time: string) {
  //   const progressData = { userId, courseId, status, score, time };
  //   return this.http.post(`${this.baseUrl}/save`, progressData);
  // }

  getUserProgress(userId: number, courseId: number) {
    return this.http.get(`${this.baseUrl}/user/${userId}/course/${courseId}`);
  }
  saveProgress(userId: number, courseId: number, status: string, score: number, time: string): Observable<any> {
    const progressData = { userId, courseId, status, score, time };
    return this.http.post(`${this.baseUrl}/save`, progressData);
  }
  // getUserProgress(userId: number): Observable<any[]> { 
  //   return this.http.get<any[]>(`${this.baseUrl}/apiName/user/${userId}`); 
  // }

  // getCourseProgress(courseId: number, userId: number): Observable<any> {
  //    return this.http.get<any>(`${this.baseUrl}/apiname/${courseId}/user/${userId}`);
  // } 
}
