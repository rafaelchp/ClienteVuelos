import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CiudadesService } from '../../service/ciudades.service';
import { AerolineaI, vueloAerolineaI, VueloCreateI, vueloI } from 'src/app/shared/interface/vuelo';
import { VueloService } from '../../service/vuelo.service';





export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MM DD',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MM DD',
  },
};


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers:[
    {
      provide:DateAdapter,
      useClass:MomentDateAdapter,
      deps:[MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide:MAT_DATE_FORMATS, useValue:MY_FORMATS}

  ]
})
export class ModalComponent implements OnInit {
  form!: FormGroup;
  ciudades!:any[];
  aerolineasCiudades!:vueloAerolineaI;
  aerolinea!:AerolineaI[];
  vuelo!:vueloI;

  constructor( private fb: FormBuilder,
              private ciudadesSVC:CiudadesService,
              private vueloSVC: VueloService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.getCiudades();
    this.form= this.fb.group({
      id:[0],
      fechaV:['', Validators.required],
      ciudad:[, Validators.required],
      numvuelo:['', Validators.required],
      horaSal:['', Validators.required],
      aerolinea:['', Validators.required],
      origen:['', Validators.required],
      llegada:['', Validators.required],
      estadoV:['', Validators.required],

    });
    this.patchFormData();
    this.vuelo=this.data.vuelo;
  }

  private getCiudades():void{

    this,this.vueloSVC.getAerolineasCiudades().subscribe(aero=>{
      this.aerolineasCiudades=aero;
      this.aerolinea=aero.aerolineas;
      this.ciudades= aero.ciudades


    })

  }


  patchFormData(){
    this.form.patchValue({
      id:this.data?.vuelo.id,
      fechaV:this.data?.vuelo.fechaVuelo,
      ciudad:this.data?.vuelo.ciudadDTOs[0]?.id,
      numvuelo:this.data?.vuelo.numVuelo,
      horaSal:this.data?.vuelo.horaSalida,
      aerolinea:this.data?.vuelo.aerolineaDTOs[0]?.id,
      origen:this.data?.vuelo.ciudadDTOs[1]?.id,
      llegada:this.data?.vuelo.horaLlegada,
      estadoV:this.data?.vuelo.estadoVuelo

    })
  }

  onSaveData(){
    const formValue= this.form.value;
    const fecha= formValue.fechaV.toISOString();
    formValue.fechaV=fecha;


    const sendData:VueloCreateI={
      fechaVuelo:fecha,
      horaSalida:formValue.horaSal,
      horaLlegada:formValue.llegada,
      numVuelo:formValue.numvuelo,
      estadoVuelo: formValue.estadoV,
      ciudadesId:[formValue.ciudad, formValue.origen],
      aerolinieasId:[formValue.aerolinea]

    }


    this.vueloSVC.postVuelo(sendData).subscribe(res=>{
      console.log(res);
      location.reload();
    });


  }

}
