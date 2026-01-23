import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export type PokemonListItem = {
  name: string;
  url: string;
  id: number;
  sprite: string; // mini imagen
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  sprite: string;
};

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private base = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getList(limit: number, offset: number): Observable<{ total: number; items: PokemonListItem[] }> {
    const url = `${this.base}/pokemon?limit=${limit}&offset=${offset}`;
    const res = this.http.get<PokemonListResponse>(url).pipe(
      map(res => ({
        total: res.count,
        items: res.results.map(r => {
          const id = this.extractIdFromUrl(r.url);
          return {
            name: r.name,
            url: r.url,
            id,
            sprite: this.spriteFromId(id),
          };
        }),
      }))
    );
    return res;
  }

  getDetailByName(name: string): Observable<PokemonDetail> {
    const url = `${this.base}/pokemon/${encodeURIComponent(name)}`;

    return this.http.get<any>(url).pipe(
      map(p => ({
        id: p.id,
        name: p.name,
        height: p.height,
        weight: p.weight,
        types: (p.types ?? []).map((t: any) => t.type?.name).filter(Boolean),
        sprite: p.sprites?.other?.['official-artwork']?.front_default
          ?? p.sprites?.front_default
          ?? this.spriteFromId(p.id),
      }))
    );
  }

  private extractIdFromUrl(url: string): number {
    // ejemplo: https://pokeapi.co/api/v2/pokemon/25/
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match ? Number(match[1]) : 0;
  }

  private spriteFromId(id: number): string {
    // sprites oficiales (muy cómodos para lista)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getAll(): Observable<{ total: number; items: PokemonListItem[] }> {
  const url = `${this.base}/pokemon?limit=100000&offset=0`;

  return this.http.get<PokemonListResponse>(url).pipe(
    map(res => ({
      total: res.count,
      items: res.results.map(r => {
        const id = this.extractIdFromUrl(r.url);
        return {
          name: r.name,
          url: r.url,
          id,
          sprite: this.spriteFromId(id),
        };
      }),
    }))
  );
}

}
