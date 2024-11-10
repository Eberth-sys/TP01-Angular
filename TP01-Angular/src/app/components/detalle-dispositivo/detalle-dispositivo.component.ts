import { Component, Input } from '@angular/core';
import { Dispositivo } from '../../interfaces/dispositivo';
import { CommonModule } from '@angular/common';//importo CommonModule para el uso de *ngfor en html.

@Component({
  selector: 'app-detalle-dispositivo',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './detalle-dispositivo.component.html',
  styleUrl: './detalle-dispositivo.component.css'
})
export class DetalleDispositivoComponent {

  @Input() dispositivo!: Dispositivo; //Permite mostrar detalles del dispotivo cuando se seleeciona.
}
