export interface vueloI{
  id:number,
  ciudad:string,
  numvuelo:string,
  horaSal:string,
  aerolinea:string,
  origen:string,
  llegada:string,
  estadoV:string,
  fechaV:Date
}

export interface AerolineaI{
  id:number,
  nombreAerolinea:string
}

export interface ciudadI{
  id:number,
  ciudad: string
}

export interface vueloAerolineaI{
  aerolineas:AerolineaI[],
  ciudades:ciudadI[]
}


export interface vuelosI{
  aerolineaDTOs:AerolineaI[],
  ciudadDTOs: ciudadI[],
  estadoVuelo: string,
  fechaVuelo: Date,
  horaLlegada: string,
  horaSalida: string,
  id: number,
  numVuelo:string

}

export  interface VueloCreateI{
  fechaVuelo: Date,
  horaSalida: string,
  horaLlegada: string,
  numVuelo:string,
  estadoVuelo: string,
  ciudadesId: number[],
  aerolinieasId:number[]
}


