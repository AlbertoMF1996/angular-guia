import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cuaderno',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './cuaderno.html',
  styleUrl: './cuaderno.scss',
})
export class Cuaderno {
  alumnoId$: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.alumnoId$ = this.route.paramMap.pipe(
      map(p => p.get('alumnoId') ?? '1')
    );
  }
}
