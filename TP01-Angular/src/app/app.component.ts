import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDispositivosComponent } from './components/lista-dispositivos/lista-dispositivos.component';
import { DetalleDispositivoComponent } from './components/detalle-dispositivo/detalle-dispositivo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDispositivosComponent, DetalleDispositivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP01-Angular';
}
