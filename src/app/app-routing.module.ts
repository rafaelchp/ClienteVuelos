import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckrolGuard } from './shared/guard/checkrol.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', loadChildren:()=>
      import('./auth/login/login.module').then(m=> m.LoginModule)
  },

  { path: 'vuelo', loadChildren: () =>
    import('./components/vuelo/vuelo.module').then(m => m.VueloModule), canActivate:[CheckrolGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
