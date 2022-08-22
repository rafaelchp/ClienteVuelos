import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAdmin=false;
  isLogged=false;
  token=0;

  private destroy$ = new Subject<any>();

  constructor(private athSVC: AuthService) { }


  ngOnInit(): void {

    this.athSVC.token$
      .pipe(takeUntil(this.destroy$))
      .subscribe((token:string)=>{
        this.isLogged=!this.isLogged;this.isLogged;

        if(token){
          this.token=token?.length
        }else{
          this.token=0;
        }
      })
  }



  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();

 }

 onLogout(){
  this.athSVC.logout();
  location.reload();
 }


}
