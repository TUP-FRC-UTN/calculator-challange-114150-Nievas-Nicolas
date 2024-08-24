import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcularComponent } from "./calcular/calcular.component";
import { OperacionesComponent } from './operaciones/operaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcularComponent, OperacionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculatorApp';
}
