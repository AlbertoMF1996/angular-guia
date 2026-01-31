import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuadernoStorageService, CuadernoData } from '../cuaderno-storage.service';

@Component({
  selector: 'app-cuaderno-ajustes',
  standalone: true,
  templateUrl: './ajustes.html',
  styleUrl: './ajustes.scss',
})
export class Ajustes {
  alumnoId = '';
  data!: CuadernoData;

  constructor(private route: ActivatedRoute, private store: CuadernoStorageService) {
    // TODO:
    // 1) leer alumnoId
    // 2) cargar data
  }

  guardar(): void {
    // TODO: store.save(alumnoId, data)
  }
}
