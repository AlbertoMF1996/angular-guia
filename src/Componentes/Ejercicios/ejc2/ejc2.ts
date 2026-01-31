import { ChangeDetectorRef, Component } from '@angular/core';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Component({
  selector: 'app-ejc2',
  standalone: true,
  templateUrl: './ejc2.html',
  styleUrl: './ejc2.scss',
})
export class Ejc2 {
  inputId = '1';

  loading = false;
  error = '';
  post: Post | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  async buscar(): Promise<void> {
    // TODO:
    // 1) limpiar error, post=null
    // 2) validar inputId (entero 1..100)
    // 3) poner loading=true
    // 4) fetch a la URL /posts/{id}
    // 5) si response no ok => error
    // 6) parsear JSON => this.post
    // 7) loading=false en finally
    // 8) cdr.markForCheck() tras cambios
  }

  random(): void {
    // TODO: generar un número aleatorio 1..100, asignarlo a inputId y llamar buscar()
  }

  private getParsedId(): number | null {
    const raw = this.inputId.trim();
    if (!/^\d+$/.test(raw)) return null;
    return Number(raw);
  }
}
