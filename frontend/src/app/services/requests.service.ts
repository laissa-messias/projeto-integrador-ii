import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private auth: any

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.authService.contextAuth.subscribe((res) => {
      this.auth = res;
    })
  }

  getListByStatus(status: number = 99): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `listar2/${this.auth.idcli}/${this.auth.token}/${status}/1`);
  }

  getRequestById(id: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `carregar_sol2/${id}/1`);
  }

  getSystems(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `inserir_solicitacao2/${this.auth.idcli}/1`);
  }

  postRequest(formData: FormData): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}inclui_sol2/${this.auth.idcli}/1`, formData);
  }

  systemRealease(formData: any):Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}liberar_maquina/${this.auth.idcli}/1`, formData);
  }
}
