import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PosthomeService {
  private apiUrl= 'http://localhost:5296/Post'
  constructor(private http: HttpClient) { }

  createPost(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
