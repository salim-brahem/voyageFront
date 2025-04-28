import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfessionStats } from '../models/ProfessionStats.model';

@Injectable({
  providedIn: 'root',
})
export class ProfessionService {

  private baseUrl = 'http://localhost:8088/api/professions';

  // Static token
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbGVma3Jpc3RvdTk5MkBnbWFpbC5jb20iLCJpYXQiOjE3NDUyNDYzNTAsImV4cCI6MTc0NTMzMjc1MH0.KIRy-r5eFgs_q4bhh48JphvHoA6mYvQlAWGy4Ae2p70';  // Replace with the static token you want to use

  constructor(private http: HttpClient) {}

  getStats(): Observable<ProfessionStats[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<ProfessionStats[]>(`${this.baseUrl}/stats`, { headers });
  }
}
