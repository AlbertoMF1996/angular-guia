import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.scss',
  standalone:true
})
export class Contador {
  numero = 0;
  inc() { this.numero++; }
  dec() { this.numero--; }
  reset() { this.numero = 0; }
}
