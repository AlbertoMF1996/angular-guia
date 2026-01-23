import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type Prioridad = 'Baja' | 'Media' | 'Alta';
type FiltroPrioridad = 'Todas' | Prioridad;

type Tarea = {
  idTarea: string;
  titulo: string;
  fechaMaxima: string; // YYYY-MM-DD
  prioridad: Prioridad;
  creadaEn: number;

  completada: boolean;
  completadaEn?: number;
};

const STORAGE_KEY = 'tareas_localstorage_demo_v2';

@Component({
  selector: 'app-tareas-localstorage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas-localstorage.html',
  styleUrl: './tareas-localstorage.scss',
})
export class TareasLocalstorage implements OnInit {
  // Form
  titulo = '';
  fechaMaxima = '';
  prioridad: Prioridad = 'Media';

  // Estado
  tareas: Tarea[] = [];
  error = '';

  // Filtros
  filtroPrioridad: FiltroPrioridad = 'Todas';
  fechaDesde = '';
  fechaHasta = '';

  // UI
  mostrarCompletadas = false;

  ngOnInit(): void {
    this.cargar();
  }

  guardar(): void {
    this.error = '';

    const t = this.titulo.trim();
    if (!t) {
      this.error = 'El título es obligatorio.';
      return;
    }
    if (!this.fechaMaxima) {
      this.error = 'La fecha máxima es obligatoria.';
      return;
    }

    const nueva: Tarea = {
      idTarea: this.generarId(),
      titulo: t,
      fechaMaxima: this.fechaMaxima,
      prioridad: this.prioridad,
      creadaEn: Date.now(),
      completada: false,
    };

    this.tareas = [nueva, ...this.tareas];
    this.persistir();

    this.titulo = '';
    this.fechaMaxima = '';
    this.prioridad = 'Media';
  }

  eliminar(idTarea: string): void {
    this.tareas = this.tareas.filter(t => t.idTarea !== idTarea);
    this.persistir();
  }

  completar(idTarea: string): void {
    this.tareas = this.tareas.map(t => {
      if (t.idTarea !== idTarea) return t;
      if (t.completada) return t;

      return {
        ...t,
        completada: true,
        completadaEn: Date.now(),
      };
    });

    this.persistir();

    // Si completan alguna, tiene sentido mostrar el menú de completadas
    this.mostrarCompletadas = true;
  }

  limpiarFiltros(): void {
    this.filtroPrioridad = 'Todas';
    this.fechaDesde = '';
    this.fechaHasta = '';
  }

  // -------------------------
  // Listas derivadas + filtros
  // -------------------------
  get pendientesFiltradas(): Tarea[] {
    return this.aplicarFiltros(this.tareas.filter(t => !t.completada))
      .sort((a, b) => b.creadaEn - a.creadaEn);
  }

  get completadasFiltradas(): Tarea[] {
    return this.aplicarFiltros(this.tareas.filter(t => t.completada))
      .sort((a, b) => (b.completadaEn ?? 0) - (a.completadaEn ?? 0));
  }

  private aplicarFiltros(lista: Tarea[]): Tarea[] {
    return lista.filter(t => {
      // Prioridad
      if (this.filtroPrioridad !== 'Todas' && t.prioridad !== this.filtroPrioridad) {
        return false;
      }

      // Fechas (YYYY-MM-DD compara bien como string)
      if (this.fechaDesde && t.fechaMaxima < this.fechaDesde) {
        return false;
      }
      if (this.fechaHasta && t.fechaMaxima > this.fechaHasta) {
        return false;
      }

      return true;
    });
  }

  // -------------------------
  // Persistencia
  // -------------------------
  private cargar(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.tareas = [];
        return;
      }

      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) {
        this.tareas = [];
        return;
      }

      this.tareas = parsed
        .filter(x => x && typeof x === 'object')
        .map((x: any) => ({
          idTarea: String(x.idTarea ?? ''),
          titulo: String(x.titulo ?? ''),
          fechaMaxima: String(x.fechaMaxima ?? ''),
          prioridad: (['Baja', 'Media', 'Alta'].includes(x.prioridad) ? x.prioridad : 'Media') as Prioridad,
          creadaEn: Number.isFinite(x.creadaEn) ? Number(x.creadaEn) : Date.now(),
          completada: Boolean(x.completada ?? false),
          completadaEn: Number.isFinite(x.completadaEn) ? Number(x.completadaEn) : undefined,
        }))
        .filter(t => t.idTarea && t.titulo && t.fechaMaxima);

    } catch {
      this.tareas = [];
    }
  }

  private persistir(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tareas));
  }

  private generarId(): string {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
  }

  // -------------------------
  // Helpers de UI
  // -------------------------
  badgeClass(p: Prioridad): string {
    return p === 'Alta' ? 'alta' : p === 'Media' ? 'media' : 'baja';
  }

  trackById(_: number, t: Tarea): string {
    return t.idTarea;
  }
}
