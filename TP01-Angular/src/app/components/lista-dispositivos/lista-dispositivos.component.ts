import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../services/dispositivo.service'; //Importo el servicio de dispotivos.
import { Dispositivo } from '../../interfaces/dispositivo';  //Importo Dispositivos 
import { CommonModule } from '@angular/common'; //Importo CommonModulo para el uso de ngfor
import { DetalleDispositivoComponent } from '../detalle-dispositivo/detalle-dispositivo.component';  //importo el componente del detalles del dispotivos.
import { ResaltarDirective } from '../../directives/resaltar.directive';
import { ResumenTextoPipe } from '../../pipes/resumen-texto.pipe'; //Importo el pipeline



@Component({
  selector: 'app-lista-dispositivos',
  standalone: true,
  imports: [CommonModule, DetalleDispositivoComponent, ResaltarDirective, ResumenTextoPipe], //Importo
  templateUrl: './lista-dispositivos.component.html',
  styleUrl: './lista-dispositivos.component.css'
})
export class ListaDispositivosComponent {

  dispositivos: Dispositivo[] = []; //Donde alamcenaré la lista de dispotivos. 
  dispositivoSeleccionado!: Dispositivo | null; //Almaceno el dispositivo sleccionado.

  constructor(private dispositivoService: DispositivoService) {} //Contructuro para permiti acceder al servicio dentro del componente.

  //ngOnInit automaticamente inicia la lista de dispotivios al inicio.
  ngOnInit(): void { 
    this.dispositivos = this.dispositivoService.obtenerDispositivos(); //funcion para obtner la lista
  }


  // Método para seleccionar un dispositivo
  seleccionarDispositivo(dispositivo: Dispositivo): void {
    this.dispositivoSeleccionado = dispositivo;
}

// Método para poder eliminar un dispositivo de la lista que se seleeciona. 
eliminarDispositivo(dispositivo: Dispositivo): void {
  this.dispositivos = this.dispositivos.filter(d => d !== dispositivo);
}
}
