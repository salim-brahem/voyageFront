import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../models/employe.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {

  private baseUrl = 'http://localhost:8088/api/employes';  // API URL

  // Static token (si nécessaire pour authentification)
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbGVma3Jpc3RvdTk5MkBnbWFpbC5jb20iLCJpYXQiOjE3NDUyNDYzNTAsImV4cCI6MTc0NTMzMjc1MH0.KIRy-r5eFgs_q4bhh48JphvHoA6mYvQlAWGy4Ae2p70';  // Replace with the static token you want to use

  constructor(private http: HttpClient) {}

  getEmployes(): Observable<Employe[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Employe[]>(this.baseUrl, { headers });
  }

  getEmployeCount(): Observable<number> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

    return this.http.get<number>(`${this.baseUrl}/count`, { headers });
  }


}
