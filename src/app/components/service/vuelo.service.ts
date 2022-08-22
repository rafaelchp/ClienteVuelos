import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { vueloAerolineaI, VueloCreateI, vuelosI } from 'src/app/shared/interface/vuelo';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VueloService {


  constructor(private http: HttpClient,private toastrService: ToastrService) { }


  getAerolineasCiudades(): Observable<vueloAerolineaI> {
    return this.http
      .get<vueloAerolineaI>(`${environment.API_URL}/api/vuelos/PostGet`)
      .pipe(catchError(this.handlerError));

  }

  getVuelos():Observable<vuelosI[]>{
    return this.http
      .get<vuelosI[]>(`${environment.API_URL}/api/vuelos/view-vuelos`)
      .pipe(catchError(this.handlerError));
  }

  postVuelo(vuelo: VueloCreateI):Observable<any>{
    return this.http
      .post<any>(`${environment.API_URL}/api/vuelos`,vuelo)
      .pipe(catchError(this.handlerError));
  }


  handlerError(error:any){
    let errorMessage = 'Error unknown';
    let errorType='';
    if (error) {
      errorType = "Client side error"
      errorMessage = `Error ${error.message}`;


    }


    return throwError(errorMessage);

  }

}




