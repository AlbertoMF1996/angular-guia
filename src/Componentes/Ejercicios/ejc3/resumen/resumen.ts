import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuadernoStorageService, CuadernoData } from '../cuaderno-storage.service';

@Component({
  selector: 'app-resumen',
  standalone: true,
  templateUrl: './resumen.html',
  styleUrl: './resumen.scss',
})
export class Resumen {
  alumnoId = '';
  data: CuadernoData | null = null;

  constructor(private route: ActivatedRoute, private store: CuadernoStorageService) {
    // TODO:
    // 1) leer alumnoId de la ruta padre (paramMap)
    // 2) cargar data de localStorage con ese alumnoId
  }
}
