import { Component } from '@angular/core';

type TipoAviso = 'info' | 'warning' | 'urgente';

type Aviso = {
  id: number;
  texto: string;
  tipo: TipoAviso;
};

@Component({
  selector: 'app-ejc1',
  standalone: true,
  templateUrl: './ejc1.html',
  styleUrl: './ejc1.scss',
})
export class Ejc1 {
  // Estado del panel
  panelActivo = true;

  // Form
  texto = '';
  tipo: TipoAviso = 'info';
  error = '';

  // Lista
  avisos: Aviso[] = [];

  togglePanel(): void {
    // TODO: alternar panelActivo
  }

  agregarAviso(): void {
    // TODO:
    // 1) limpiar error
    // 2) validar texto (trim)
    // 3) si vacío => no hacer nada
    // 4) si longitud > 30 => error "Demasiado largo (máx 30)"
    // 5) si OK => push de aviso con id único y limpiar texto
  }

  eliminarAviso(id: number): void {
    // TODO: eliminar por id (filter)
  }

  trackById(_: number, a: Aviso): number {
    return a.id;
  }
}
