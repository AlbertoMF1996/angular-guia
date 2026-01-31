import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuadernoStorageService, CuadernoData } from '../cuaderno-storage.service';

@Component({
  selector: 'app-cuaderno-notas',
  standalone: true,
  templateUrl: './notas.html',
  styleUrl: './notas.scss',
})
export class Notas {
  alumnoId = '';
  data!: CuadernoData;

  texto = '';
  error = '';

  constructor(private route: ActivatedRoute, private store: CuadernoStorageService) {
    // TODO:
    // 1) leer alumnoId desde route.parent
    // 2) cargar data (this.data = store.load(alumnoId))
  }

  agregar(): void {
    // TODO:
    // 1) validar texto (no vacío, <= 40 chars)
    // 2) push nota {id, texto, fecha}
    // 3) store.save(alumnoId, data)
    // 4) limpiar texto
  }

  eliminar(id: number): void {
    // TODO:
    // filtrar notas y guardar
  }
}
