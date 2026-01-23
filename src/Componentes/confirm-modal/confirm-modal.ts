import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.html',
  styleUrl: './confirm-modal.scss',
})
export class ConfirmModal {
  @Input() abierto = false;
  @Input() titulo = 'Confirmación';
  @Input() mensaje = '¿Seguro que quieres continuar?';

  @Input() textoConfirmar = 'Sí, borrar';
  @Input() textoCancelar = 'Cancelar';

  @Output() confirmar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();

  onBackdropClick(): void {
    // click fuera del modal => cancelar
    this.cancelar.emit();
  }

  onCancel(): void {
    this.cancelar.emit();
  }

  onConfirm(): void {
    this.confirmar.emit();
  }
}
