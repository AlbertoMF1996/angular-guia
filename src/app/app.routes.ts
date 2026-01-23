import { Routes } from '@angular/router';
import { Rutas } from '../Componentes/rutas/rutas';
import { Pag1 } from '../Pages/ejemplo-route/pag1/pag1';
import { Pag2 } from '../Pages/ejemplo-route/pag2/pag2';
import { Pag3 } from '../Pages/ejemplo-route/pag3/pag3';
import { Contador } from '../Componentes/contador/contador';
import { ListaTareas } from '../Componentes/lista-tareas/lista-tareas';
import { BindingBasico } from '../Componentes/binding-basico/binding-basico';
import { PosiblesPreguntas } from '../Componentes/posibles-preguntas/posibles-preguntas';
import { IfForDemo } from '../Componentes/if-for-demo/if-for-demo';
import { TareasLocalstorage } from '../Componentes/tareas-localstorage/tareas-localstorage';
import { TareasConModal } from '../Componentes/tareas-con-modal/tareas-con-modal';
import { Pokedex } from '../Componentes/Pokedex/pokedex/pokedex';
import { Ajax } from '../Componentes/ajax/ajax';

export const routes: Routes = [
  { path: '', redirectTo: 'renderizadoCondicional', pathMatch: 'full' },

  { path: 'renderizadoCondicional', component: IfForDemo },
  { path: 'contador', component: Contador },
  { path: 'tareas', component: ListaTareas },
  { path: 'binding', component: BindingBasico },
  { path: 'tareasLocalstorage', component: TareasLocalstorage },
  { path: 'comunicacionEntreComponentes', component: TareasConModal },
  { path: 'ajax', component: Ajax },
  { path: 'preguntas', component: PosiblesPreguntas },

  {
    path: 'rutas',
    component: Rutas,
    children: [
      { path: '', redirectTo: 'pag1', pathMatch: 'full' },
      { path: 'pag1', component: Pag1 },
      { path: 'pag2', component: Pag2 },
      { path: 'pag3', component: Pag3 },
    ],
  },

  { path: '**', redirectTo: 'renderizadoCondicional' },
];