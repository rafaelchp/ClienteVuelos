import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient,      private router: Router
   ) { }


   get token$() {
    return this.token.asObservable();
  }

    login(authData:any):Observable<any|void>{
      return this.http
        .post<any>(`${environment.API_URL}/api/Auth/Login`, authData)
        .pipe(
          map((token:string)=>{
            this.saveLocalStorage(token);
            this.token.next(token);
            return token;
          })
        )
    }

    logout():void{
      localStorage.removeItem('token');
      this.token.next(false);
      this.router.navigate(['login']);
    }


    private saveLocalStorage(token: string):void{
      localStorage.setItem('token', token);
    }
}
