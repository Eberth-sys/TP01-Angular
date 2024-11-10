import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDispositivosComponent } from './components/lista-dispositivos/lista-dispositivos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDispositivosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP01-Angular';
}
