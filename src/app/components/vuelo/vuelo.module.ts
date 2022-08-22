import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueloRoutingModule } from './vuelo-routing.module';
import { VueloComponent } from './vuelo.component';
import { MaterialModule } from 'src/app/material.module';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    VueloComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    VueloRoutingModule,
    MaterialModule,
  ]
})
export class VueloModule { }
