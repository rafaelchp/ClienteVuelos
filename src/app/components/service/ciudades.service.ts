import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http
      .get<any[]>(`${environment.API_URL}/api/ciudades/ver`)

  }
}
