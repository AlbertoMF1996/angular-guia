import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModal } from '../confirm-modal/confirm-modal';

type Tarea = {
  id: number;
  titulo: string;
};

@Component({
  selector: 'app-tareas-con-modal',
  standalone: true,
  imports: [CommonModule, ConfirmModal],
  templateUrl: './tareas-con-modal.html',
  styleUrl: './tareas-con-modal.scss',
})
export class TareasConModal {
  tareas: Tarea[] = [
    { id: 1, titulo: 'Repasar @if y @for' },
    { id: 2, titulo: 'Hacer mini app localStorage' },
    { id: 3, titulo: 'Practicar rutas hijas' },
  ];

  modalAbierto = false;
  tareaPendienteDeBorrar: Tarea | null = null;

  abrirModalBorrado(t: Tarea): void {
    this.tareaPendienteDeBorrar = t;
    this.modalAbierto = true;
  }

  cancelarBorrado(): void {
    this.modalAbierto = false;
    this.tareaPendienteDeBorrar = null;
  }

  confirmarBorrado(): void {
    if (!this.tareaPendienteDeBorrar) return;

    const id = this.tareaPendienteDeBorrar.id;
    this.tareas = this.tareas.filter(t => t.id !== id);

    this.modalAbierto = false;
    this.tareaPendienteDeBorrar = null;
  }
}
