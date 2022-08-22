import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  private subscription: Subscription= new Subscription();

  loginForm=this.fb.group({
    username:['', [Validators.required]],
    password:['',[Validators.required]]
  })

  constructor(private authSVC: AuthService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onLogin():void{
    if(this.loginForm.invalid){
      return;
    }

    const formValue=this.loginForm.value;
    this.subscription.add(
      this.authSVC.login(formValue).subscribe(res=>{
        if(res){
          this.router.navigate(['/vuelo']);


        }
      })
    );


  }

}
