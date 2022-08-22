import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VueloComponent } from './vuelo.component';

const routes: Routes = [
  {path: '', component: VueloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueloRoutingModule { }
