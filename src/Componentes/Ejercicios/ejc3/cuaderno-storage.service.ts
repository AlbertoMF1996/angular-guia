import { Injectable } from '@angular/core';

type Nota = { id: number; texto: string; fecha: string };
export type CuadernoData = {
  apodo: string;
  color: string;
  notas: Nota[];
  updatedAt: string;
};

@Injectable({ providedIn: 'root' })
export class CuadernoStorageService {
  private key(alumnoId: string): string {
    return `cuaderno:${alumnoId}`;
  }

  load(alumnoId: string): CuadernoData {
    const k = this.key(alumnoId);
    const raw = localStorage.getItem(k);

    if (!raw) {
      return {
        apodo: '',
        color: '#2f6feb',
        notas: [],
        updatedAt: new Date().toISOString(),
      };
    }

    try {
      return JSON.parse(raw) as CuadernoData;
    } catch {
      localStorage.removeItem(k);
      return {
        apodo: '',
        color: '#2f6feb',
        notas: [],
        updatedAt: new Date().toISOString(),
      };
    }
  }

  save(alumnoId: string, data: CuadernoData): void {
    data.updatedAt = new Date().toISOString();
    localStorage.setItem(this.key(alumnoId), JSON.stringify(data));
  }
}
