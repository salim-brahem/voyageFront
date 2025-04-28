import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8088'; 
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, credentials);
  }

  registerEntreprise(data: { username : string ; email: string; password: string; }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/auth/registerEntreprise`, data);
  }}
