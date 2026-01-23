import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Vista = 'vistaIf' | 'vistaFor';

@Component({
  selector: 'app-if-for-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-for-demo.html',
  styleUrl: './if-for-demo.scss',
})
export class IfForDemo {
  vista: Vista = 'vistaIf';

  visible = true;

  mostrar(): void {
    this.visible = true;
  }

  ocultar(): void {
    this.visible = false;
  }

  inputNumero = '';
  repeticiones: number[] = [];
  error = '';

  generar(): void {
    const raw = this.inputNumero.trim();

    if (raw === '' || !/^-?\d+$/.test(raw)) {
      this.error = 'Introduce un número entero válido.';
      this.repeticiones = [];
      return;
    }

    const n = Number(raw);

    if (n < 0 || n > 10) {
      this.error = 'No te pases de listillo ;)';
      this.repeticiones = [];
      return;
    }

    this.error = '';
    this.repeticiones = Array.from({ length: n }, (_, i) => i + 1);
  }

  trackByNum(_: number, x: number): number {
    return x;
  }
}
