import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionesComponent } from "../operaciones/operaciones.component";

@Component({
  selector: 'app-calcular',
  standalone: true,
  imports: [CommonModule, FormsModule, OperacionesComponent],
  templateUrl: './calcular.component.html',
  styleUrl: './calcular.component.css'
})
export class CalcularComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  manejarResultado(res: number) {
    this.resultado = res;
  }

  limpiarValores() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
  }
}
