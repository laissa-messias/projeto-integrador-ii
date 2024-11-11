import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ContextAuth = new BehaviorSubject<any>(null);
  contextAuth = this.ContextAuth.asObservable();

  constructor(private http: HttpClient) { 
    this.init();
  }

  init() {
    const auth: any = sessionStorage.getItem('auth');
    this.ContextAuth.next(JSON.parse(auth));
  }

  authChanged(auth: any) {
    sessionStorage.removeItem('auth');

    if (auth) {
      sessionStorage.setItem('auth', JSON.stringify(auth));
    }

    this.ContextAuth.next(auth || null);
  }

  isAuthenticated() {
    const auth = this.ContextAuth.getValue();
    return auth !== null && auth !== undefined;
  }

  clear() {
    this.authChanged(null);
  }

  signin(data: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'login', data);
  }
}
