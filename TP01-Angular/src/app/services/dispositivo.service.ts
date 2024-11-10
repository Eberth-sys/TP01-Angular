import { Injectable } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivo';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  // Simulo una base de datos de dispotivos.
  private dispositivos: Dispositivo[] = [
    { id: 1, nombre: 'Sensor de Temperatura', descripcion: 'Mide la temperatura ambiente', fechaInstalacion: new Date('2024-01-10') },
    { id: 2, nombre: 'Cámara de Seguridad', descripcion: 'Cámara de vigilancia exterior', fechaInstalacion: new Date('2024-03-15') },
    { id: 3, nombre: 'Sensor de Movimiento', descripcion: 'Detecta movimiento en el área', fechaInstalacion: new Date('2024-05-20') }
  ];

  //Metodo para llamar la lista de dispositivos.
  obtenerDispositivos(): Dispositivo[] {
    return this.dispositivos;
  }

  constructor() { }
}
