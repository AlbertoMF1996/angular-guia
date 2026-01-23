import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-basico',
  imports: [],
  templateUrl: './binding-basico.html',
  styleUrl: './binding-basico.scss',
})
export class BindingBasico {
  nombre = '';
  deshabilitado = true;

  actualizarNombre(valor: string) {
    this.nombre = valor;
    this.deshabilitado = this.nombre.trim().length === 0;
  }
}
