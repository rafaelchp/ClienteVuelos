import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { VueloService } from '../service/vuelo.service';
import { vueloI, vuelosI } from 'src/app/shared/interface/vuelo';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['Destino','NumVuelo','HoraSaila','Aerolinea','action' ];
  dataValue!:any;

  constructor(private dialog: MatDialog, private vueloSVC: VueloService) { }

  ngOnInit(): void {


  this.vueloSVC.getVuelos().subscribe(res=>{

    this.dataSource.data= res;
    console.log(res)

  })

  }



  openModal(vuelo:vuelosI={
    aerolineaDTOs: [],
    ciudadDTOs: [],
    estadoVuelo: '',
    fechaVuelo: new Date,
    horaLlegada: '',
    horaSalida: '',
    id: 0,
    numVuelo: ''
  }):void{



    const dialogRef = this.dialog.open(ModalComponent,{
      height:'360px',
      width:'500px',
      data:{title: `Ver detalle`, vuelo}

    });








  }
  openModal2():void{
   const vuelo:vuelosI={
    aerolineaDTOs: [],
    ciudadDTOs: [],
    estadoVuelo: '',
    fechaVuelo: new Date,
    horaLlegada: '',
    horaSalida: '',
    id: 0,
    numVuelo: ''
    }
    console.log(vuelo);
    const dialogRef = this.dialog.open(ModalComponent,{
      height:'410px',
      width:'500px',
      data:{title: `Nuevo vuelo`, vuelo}

    });

  }



}
