import { Component } from '@angular/core';
import { Pokedex } from '../Pokedex/pokedex/pokedex';
import { PostsCrud } from '../jsonHolder/posts-crud/posts-crud';

@Component({
  selector: 'app-ajax',
  imports: [Pokedex, PostsCrud],
  templateUrl: './ajax.html',
  styleUrl: './ajax.scss',
})
export class Ajax {

}
