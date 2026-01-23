import { Component } from '@angular/core';

type Tarea = { id: number; texto: string };

@Component({
  selector: 'app-lista-tareas',
  imports: [],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.scss',
})
export class ListaTareas {
  texto = '';
  tareas: Tarea[] = [];

  agregar() {
    const limpio = this.texto.trim();
    if (!limpio) return;
    this.tareas.push({ id: Date.now(), texto: limpio });
    this.texto = '';
  }

  eliminar(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  trackById(_: number, t: Tarea) {
    return t.id;
  }
}
