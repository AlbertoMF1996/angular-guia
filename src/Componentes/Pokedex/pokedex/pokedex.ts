import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { PokemonService, PokemonDetail, PokemonListItem } from '../pokemon.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.scss',
})
export class Pokedex implements OnInit {
  items: PokemonListItem[] = [];
  total = 0;
  limit = 20;
  offset = 0;
  loadingList = false;
  errorList = '';

  allItems: PokemonListItem[] = [];
  loadedAll = false;
  loadingAll = false;

  pageSize = 20;
  page = 1;

  searchNombre = '';
  searchNumero = ''; // texto, lo validamos a entero

  // Detalle
  selected: PokemonDetail | null = null;
  loadingDetail = false;
  errorDetail = '';

  constructor(private pokemon: PokemonService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Por defecto, como antes:
    this.cargarMas();
  }

  cargarMas(): void {
    if (this.loadingList || this.loadedAll || this.loadingAll) return;

    this.loadingList = true;
    this.errorList = '';
    this.cdr.markForCheck();

    this.pokemon.getList(this.limit, this.offset).pipe(
      finalize(() => {
        this.loadingList = false;
        this.cdr.markForCheck();
      })
    ).subscribe({
      next: res => {
        this.total = res.total;
        this.items = [...this.items, ...res.items];
        this.offset += this.limit;
        this.cdr.markForCheck();
      },
      error: err => {
        console.error(err);
        this.errorList = 'No se pudo cargar la lista. Intenta de nuevo.';
        this.cdr.markForCheck();
      },
    });
  }

  cargarTodos(): void {
    if (this.loadingAll) return;

    this.loadingAll = true;
    this.errorList = '';
    this.cdr.markForCheck();

    this.pokemon.getAll().pipe(
      finalize(() => {
        this.loadingAll = false;
        this.cdr.markForCheck();
      })
    ).subscribe({
      next: res => {
        this.total = res.total;
        this.allItems = res.items;
        this.loadedAll = true;

        this.page = 1;
        this.searchNombre = '';
        this.searchNumero = '';

        this.items = [];
        this.offset = 0;

        this.cdr.markForCheck();
      },
      error: err => {
        console.error(err);
        this.errorList = 'No se pudo cargar “todos”. Intenta de nuevo.';
        this.cdr.markForCheck();
      },
    });
  }

  seleccionar(p: PokemonListItem): void {
    this.loadingDetail = true;
    this.errorDetail = '';
    this.selected = null;
    this.cdr.markForCheck();

    this.pokemon.getDetailByName(p.name).pipe(
      finalize(() => {
        this.loadingDetail = false;
        this.cdr.markForCheck();
      })
    ).subscribe({
      next: det => {
        this.selected = det;
        this.cdr.markForCheck();
      },
      error: err => {
        console.error(err);
        this.errorDetail = 'No se pudo cargar el detalle. Intenta de nuevo.';
        this.cdr.markForCheck();
      },
    });
  }

  private get parsedNumero(): number | null {
    const raw = this.searchNumero.trim();
    if (!raw) return null;
    if (!/^\d+$/.test(raw)) return null;
    return Number(raw);
  }

  get filteredAll(): PokemonListItem[] {
    if (!this.loadedAll) return [];

    const qName = this.searchNombre.trim().toLowerCase();
    const qNum = this.parsedNumero;

    return this.allItems.filter(p => {
      if (qNum !== null && p.id !== qNum) return false;
      if (qName && !p.name.toLowerCase().includes(qName)) return false;
      return true;
    });
  }

  get totalPages(): number {
    const len = this.loadedAll ? this.filteredAll.length : this.items.length;
    return Math.max(1, Math.ceil(len / this.pageSize));
  }

  get pageItems(): PokemonListItem[] {
    if (!this.loadedAll) return this.items;

    const start = (this.page - 1) * this.pageSize;
    return this.filteredAll.slice(start, start + this.pageSize);
  }

  onSearchChange(): void {
    // cuando cambias filtros, vuelve a la primera página
    this.page = 1;
  }

  prevPage(): void {
    this.page = Math.max(1, this.page - 1);
  }

  nextPage(): void {
    this.page = Math.min(this.totalPages, this.page + 1);
  }

  setPage(n: number): void {
    this.page = Math.min(this.totalPages, Math.max(1, n));
  }

  get hayMas(): boolean {
    // solo aplica al modo "cargar más"
    return !this.loadedAll && this.items.length < this.total;
  }

  trackById(_: number, p: PokemonListItem): number {
    return p.id;
  }
}
