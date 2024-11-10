import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../services/dispositivo.service'; //Importo el servicio de dispotivos.
import { Dispositivo } from '../../interfaces/dispositivo';  //Importo Dispositivos 
import { CommonModule } from '@angular/common'; //Importo CommonModulo para el uso de ngfor



@Component({
  selector: 'app-lista-dispositivos',
  standalone: true,
  imports: [CommonModule], //Importo CommoModule.
  templateUrl: './lista-dispositivos.component.html',
  styleUrl: './lista-dispositivos.component.css'
})
export class ListaDispositivosComponent {

  dispositivos: Dispositivo[] = []; //Donde alamcenaré la lista de dispotivos. 

  constructor(private dispositivoService: DispositivoService) {} //Contructuro para permiti acceder al servicio dentro del componente.

  //ngOnInit automaticamente inicia la lista de dispotivios al inicio.
  ngOnInit(): void { 
    this.dispositivos = this.dispositivoService.obtenerDispositivos(); //funcion para obtner la lista
  }
}
