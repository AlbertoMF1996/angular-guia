import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { Post, PostsService } from '../posts.service';

type Modo = 'crear' | 'editar';

@Component({
  selector: 'app-posts-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-crud.html',
  styleUrl: './posts-crud.scss',
})
export class PostsCrud implements OnInit {
  // datos
  posts: Post[] = [];

  // UI estados
  loading = false;
  saving = false;
  error = '';

  // formulario
  modo: Modo = 'crear';
  editId: number | null = null;

  title = '';
  body = '';
  userId = 1;

  // filtro simple
  q = '';

  constructor(private api: PostsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.loading = true;
    this.error = '';
    this.cdr.markForCheck();

    this.api.list().pipe(
      finalize(() => {
        this.loading = false;
        this.cdr.markForCheck();
      })
    ).subscribe({
      next: posts => {
        // para no saturar, nos quedamos con los primeros 25 (puedes quitarlo)
        this.posts = posts.slice(0, 25);
        this.cdr.markForCheck();
      },
      error: err => {
        console.error(err);
        this.error = 'No se pudieron cargar los posts.';
        this.cdr.markForCheck();
      },
    });
  }

  // -------------------
  // Crear
  // -------------------
  crear(): void {
    if (!this.validar()) return;

    this.saving = true;
    this.error = '';
    this.cdr.markForCheck();

    const payload = { userId: this.userId, title: this.title.trim(), body: this.body.trim() };

    // optimistic: lo meto ya con id temporal negativo
    const tempId = -Date.now();
    const optimistic: Post = { id: tempId, ...payload };
    this.posts = [optimistic, ...this.posts];

    this.api.create(payload).pipe(
      finalize(() => {
        this.saving = false;
        this.cdr.markForCheck();
      })
    ).subscribe({
      next: created => {
        // JSONPlaceholder suele devolver id 101
        this.posts = this.posts.map(p => (p.id === tempId ? created : p));
        this.resetForm();
        this.cdr.markForCheck();
      },
      error: err => {
        console.error(err);
        // revert
        this.posts = this.posts.filter(p => p.id !== tempId);
        this.error = 'No se pudo crear el post.';
        this.cdr.markForCheck();
      },
    });
  }

  // -------------------
  // Editar
  // -------------------
  empezarEditar(p: Post): void {
    this.modo = 'editar';
    this.editId = p.id;
    this.title = p.title;
    this.body = p.body;
    this.userId = p.userId;
  }

  cancelarEdicion(): void {
    this.resetForm();
  }

  guardarEdicion(): void {
    if (this.editId == null) return;
    if (!this.validar()) return;

    this.saving = true;
    this.error = '';
    this.cdr.markForCheck();

    const id = this.editId;
    const payload = { userId: this.userId, title: this.title.trim(), body: this.body.trim() };

    // optimistic: actualizo ya
    const prev = this.posts.find(p => p.id === id);
    this.posts = this.posts.map(p => (p.id === id ? { id, ...payload } : p));

    this.api.update(id, payload).pipe(
      finalize(() => {
        this.saving = false;
        this.cdr.markForCheck();
      })
    ).subscribe({
      next: updated => {
        this.posts = this.posts.map(p => (p.id === id ? updated : p));
        this.resetForm();
        this.cdr.markForCheck();
      },
      error: err => {
        console.error(err);
        // revert
        if (prev) this.posts = this.posts.map(p => (p.id === id ? prev : p));
        this.error = 'No se pudo actualizar el post.';
        this.cdr.markForCheck();
      },
    });
  }

  // -------------------
  // Eliminar
  // -------------------
  eliminar(p: Post): void {
    this.error = '';
    const id = p.id;

    // optimistic: quito ya
    const backup = this.posts;
    this.posts = this.posts.filter(x => x.id !== id);

    this.api.remove(id).subscribe({
      next: () => this.cdr.markForCheck(),
      error: err => {
        console.error(err);
        // revert
        this.posts = backup;
        this.error = 'No se pudo eliminar el post.';
        this.cdr.markForCheck();
      },
    });
  }

  // -------------------
  // Helpers
  // -------------------
  get postsFiltrados(): Post[] {
    const q = this.q.trim().toLowerCase();
    if (!q) return this.posts;
    return this.posts.filter(p =>
      p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q) || String(p.id).includes(q)
    );
  }

  private validar(): boolean {
    if (!this.title.trim()) {
      this.error = 'El título es obligatorio.';
      return false;
    }
    if (!this.body.trim()) {
      this.error = 'El cuerpo es obligatorio.';
      return false;
    }
    return true;
  }

  private resetForm(): void {
    this.modo = 'crear';
    this.editId = null;
    this.title = '';
    this.body = '';
    this.userId = 1;
  }

  trackById(_: number, p: Post): number {
    return p.id;
  }
}
