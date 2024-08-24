import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {
  @Output() resultado = new EventEmitter<number>();
  @Output() limpiarValores =  new EventEmitter<void>();
  @Input() valor1: number = 0;
  @Input() valor2: number = 0;

  realizarOperacion(operacion: string) {
    let resultado: number;

    switch (operacion) {
      case '+':
        resultado = this.valor1 + this.valor2;
        break;
      case '-':
        resultado = this.valor1 - this.valor2;
        break;
      case 'x':
        resultado = this.valor1 * this.valor2;
        break;
      case '/':
        resultado = this.valor2 !== 0 ? this.valor1 / this.valor2 : 0;  
        break;
      case '^':
        resultado = Math.pow(this.valor1, this.valor2);
        break;
      case '√':
        resultado = Math.sqrt(this.valor1);  
        break;
      case 'CE':
        this.limpiarValores.emit();
        return;
      default:
        resultado = 0;
        break;
    }

    this.resultado.emit(resultado);
  }

}
