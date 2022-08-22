import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


import {  Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/login/auth.service';





@Injectable({
  providedIn: 'root'
})
export class CheckrolGuard implements CanActivate {


  res!:boolean;


  constructor(private authSVC: AuthService,  private router: Router){  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree>| boolean | UrlTree {

     return this.getToken();

  }



  getToken():boolean{
    const token= localStorage.getItem('token')||undefined;

    if(token!=undefined){
      if(token?.length>0){
        this.res=true;
      }else{
        this.res=false;
        this.router.navigate(['']);
      }
    }



    return this.res;

  }

}
