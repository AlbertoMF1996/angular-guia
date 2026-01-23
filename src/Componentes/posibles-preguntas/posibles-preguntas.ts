import { Component } from '@angular/core';

type QA = { pregunta: string; respuesta: string };
type Bloque = { titulo: string; items: QA[] };

@Component({
  selector: 'app-posibles-preguntas',
  imports: [],
  templateUrl: './posibles-preguntas.html',
  styleUrl: './posibles-preguntas.scss',
})
export class PosiblesPreguntas {
  bloques: Bloque[] = [
    {
    titulo: 'Proyecto Angular y estructura',
    items: [
      { pregunta: '¿Qué es Angular CLI y para qué sirve?', respuesta: 'Es una herramienta de línea de comandos para crear, generar y ejecutar proyectos Angular (ng new, ng serve, ng generate, etc.).' },
      { pregunta: '¿Qué hace ng new?', respuesta: 'Crea un proyecto Angular con su estructura base, dependencias y configuración inicial.' },
      { pregunta: '¿Qué hace ng serve?', respuesta: 'Levanta un servidor de desarrollo y recompila automáticamente al guardar cambios.' },
      { pregunta: '¿Dónde está el código principal de la app?', respuesta: 'Normalmente dentro de la carpeta src/ (y especialmente src/app).' },
      { pregunta: '¿Para qué sirve main.ts?', respuesta: 'Es el punto de entrada: arranca la aplicación (bootstrapApplication o bootstrapModule).' },
      { pregunta: '¿Qué es AppComponent?', respuesta: 'El componente raíz, el primero que se renderiza y donde suele estar el layout principal.' },
      { pregunta: '¿Dónde van los estilos globales y los del componente?', respuesta: 'Globales en styles.(css|scss) y por componente en el archivo styleUrl del componente.' },
      { pregunta: '¿Diferencia entre templateUrl y template?', respuesta: 'templateUrl apunta a un HTML externo; template define el HTML inline en el TS.' },
      { pregunta: 'Diferencia entre styleUrl y styles?', respuesta: 'styleUrl apunta a un archivo externo; styles define estilos inline en el TS.' },
      { pregunta: '¿Qué es hot reload?', respuesta: 'Recarga/actualiza la aplicación al guardar cambios para verlos al instante.' },
    ],
  },

  {
    titulo: 'Componentes y decoradores',
    items: [
      { pregunta: '¿Qué es un componente en Angular?', respuesta: 'Una pieza reutilizable de UI con lógica (clase), plantilla (HTML) y estilos.' },
      { pregunta: '¿Para qué sirve @Component?', respuesta: 'Define metadatos del componente: selector, template, styles, imports, etc.' },
      { pregunta: '¿Qué es el selector?', respuesta: 'El nombre de la etiqueta HTML con la que se usa el componente (ej: <app-ejemplo />).' },
      { pregunta: '¿Qué significa standalone: true?', respuesta: 'Que el componente no necesita declararse en un NgModule; importa sus dependencias en imports.' },
      { pregunta: '¿Para qué sirve imports en un standalone?', respuesta: 'Para indicar qué componentes/directivas/pipes (RouterOutlet, CommonModule, etc.) usa el template.' },
      { pregunta: '¿Diferencia entre componente y servicio?', respuesta: 'El componente renderiza UI; el servicio contiene lógica reutilizable (por ejemplo, llamadas HTTP).' },
      { pregunta: '¿Qué es el estado en un componente?', respuesta: 'Variables/propiedades que determinan qué se muestra y cómo se comporta la UI.' },
    ],
  },

  {
    titulo: 'Plantillas e interacción',
    items: [
      { pregunta: '¿Qué es interpolación {{ }}?', respuesta: 'Muestra valores del componente en el HTML (ej: {{ nombre }}).' },
      { pregunta: '¿Qué es property binding [prop]?', respuesta: 'Asigna valores del componente a propiedades HTML (ej: [disabled]="condicion").' },
      { pregunta: '¿Qué es event binding (evento)?', respuesta: 'Escucha eventos del DOM y ejecuta código (ej: (click)="accion()").' },
      { pregunta: '¿Diferencia entre property y event binding?', respuesta: 'Property: datos -> vista; Event: vista -> lógica.' },
      { pregunta: '¿Qué es [(ngModel)]?', respuesta: 'Two-way binding (vista <-> estado). Necesita FormsModule (o importarlo en standalone).' },
      { pregunta: '¿Qué es $event?', respuesta: 'Objeto del evento (por ejemplo, para leer el valor en (input)).' },
      { pregunta: '¿Cómo capturo valor de input sin ngModel?', respuesta: 'Con (input) y leyendo $event.target.value, guardándolo en una variable del componente.' },
      { pregunta: '¿Qué es trackBy/track y por qué se usa?', respuesta: 'Ayuda a Angular a identificar elementos en listas y renderizar de forma más eficiente.' },
    ],
  },

  {
    titulo: 'Control Flow: @if y @for',
    items: [
      { pregunta: '¿Qué es @if?', respuesta: 'Control flow moderno para render condicional (alternativa a *ngIf).' },
      { pregunta: '¿Qué es @for?', respuesta: 'Control flow moderno para renderizar listas (alternativa a *ngFor).' },
      { pregunta: '¿Cómo se usa @else con @if?', respuesta: 'Permite un bloque alternativo cuando la condición no se cumple.' },
      { pregunta: '¿Para qué sirve track en @for?', respuesta: 'Para indicar el identificador único del elemento y mejorar rendimiento en listas.' },
      { pregunta: '¿Cómo muestro un “vacío” cuando no hay items?', respuesta: 'Con @if (lista.length === 0) { ... } @else { ... }.' },
      { pregunta: '¿Cómo muestro un error solo cuando existe?', respuesta: 'Con @if (error) { <p>{{error}}</p> }.' },
      { pregunta: '¿Por qué da error si escribo @if literal en HTML?', respuesta: 'Porque Angular lo interpreta como bloque de control flow.' },
      { pregunta: '¿Cómo imprimo “@if” como texto?', respuesta: 'Escapando la @: <code>&#64;if</code> o usando {{ "@if" }}.' },
    ],
  },

  {
    titulo: 'Rutas (Router) y rutas hijas',
    items: [
      { pregunta: '¿Qué es el Router de Angular?', respuesta: 'Sistema de navegación por URL que carga componentes según rutas.' },
      { pregunta: '¿Qué hace <router-outlet>?', respuesta: 'Es el “hueco” donde Angular renderiza el componente de la ruta activa.' },
      { pregunta: '¿Qué es routerLink?', respuesta: 'Directiva para navegar sin recargar la página (SPA).' },
      { pregunta: '¿Qué hace routerLinkActive?', respuesta: 'Añade una clase cuando el enlace corresponde a la ruta actual (ej: "active").' },
      { pregunta: '¿Qué son rutas hijas (children)?', respuesta: 'Rutas que se renderizan dentro del router-outlet de un componente padre.' },
      { pregunta: '¿Para qué sirve redirectTo?', respuesta: 'Para redirigir una ruta a otra (por ejemplo, ruta vacía a pag1).' },
      { pregunta: '¿Qué significa pathMatch: "full"?', respuesta: 'Que la ruta debe coincidir completa para aplicar el redirect.' },
      { pregunta: '¿Por qué se duplicaba el contenido al renderizar <app-rutas /> manualmente?', respuesta: 'Porque estabas mezclando render manual con Router; el componente layout se pintaba dos veces.' },
      { pregunta: '¿Por qué no conviene mezclar “vista con @if” y Router para lo mismo?', respuesta: 'Porque el Router necesita controlar la navegación y el router-outlet; con @if no hay URL ni navegación real.' },
      { pregunta: '¿Cómo marco activo también en rutas hijas?', respuesta: 'Con routerLinkActiveOptions: { exact: false } en el enlace.' },
    ],
  },

  {
    titulo: 'Estilos del menú y UX',
    items: [
      { pregunta: '¿Cómo hago que <a> parezcan botones?', respuesta: 'Dándoles display inline-flex, padding, border-radius, background, border y hover/active.' },
      { pregunta: '¿Qué aporta :hover, :active y :focus-visible?', respuesta: 'Mejoran interacción: hover al pasar, active al clicar, focus-visible para teclado (accesibilidad).' },
      { pregunta: '¿Cómo marco visualmente el activo?', respuesta: 'Con una clase (ej: .active) y estilos más oscuros/contrastados.' },
      { pregunta: '¿Qué es una transición CSS?', respuesta: 'Animación suave al cambiar propiedades (background, border, transform…), mejora UX.' },
    ],
  },

  {
    titulo: 'LocalStorage: mini app de tareas',
    items: [
      { pregunta: '¿Qué es localStorage?', respuesta: 'Almacenamiento del navegador para guardar strings de forma persistente.' },
      { pregunta: '¿Por qué usar JSON.stringify?', respuesta: 'Porque localStorage solo guarda strings; stringify convierte objetos/arrays en texto.' },
      { pregunta: '¿Por qué usar JSON.parse?', respuesta: 'Para convertir el string guardado en un objeto/array usable en JS.' },
      { pregunta: '¿Qué pasa si el JSON está corrupto?', respuesta: 'JSON.parse fallará; se maneja con try/catch y se reinicia la lista.' },
      { pregunta: '¿Por qué usar una STORAGE_KEY constante?', respuesta: 'Para evitar errores tipográficos y poder versionar/cambiar fácilmente la clave.' },
      { pregunta: '¿Cómo generas un idTarea?', respuesta: 'Con Date.now() + un random (suficiente para demo).' },
      { pregunta: '¿Por qué mostrar tareas guardadas readonly?', respuesta: 'Para que sean “plantillas” de lectura y evitar edición directa en esa vista.' },
      { pregunta: '¿Por qué separar cargar() y persistir()?', respuesta: 'Mejora organización: una carga desde storage y otra guarda; más mantenible.' },
    ],
  },

  {
    titulo: 'Filtros y tareas completadas',
    items: [
      { pregunta: '¿Cómo filtras por prioridad?', respuesta: 'Comparando el campo prioridad con el filtro (o mostrando todas si “Todas”).' },
      { pregunta: '¿Cómo filtras por fechas desde/hasta?', respuesta: 'Comparas fechaMaxima con fechaDesde/fechaHasta (YYYY-MM-DD funciona bien como string).' },
      { pregunta: '¿Qué es un estado derivado (get pendientesFiltradas)?', respuesta: 'Una “vista calculada” a partir del estado base (tareas) y filtros.' },
      { pregunta: '¿Cómo marcas una tarea como completada?', respuesta: 'Añadiendo un boolean completada y actualizándolo al pulsar “Completada”.' },
      { pregunta: '¿Cómo haces el aspecto verde en completadas?', respuesta: 'Con una clase CSS (card--done) cuando completada === true.' },
      { pregunta: '¿Cómo pones un check verde en la etiqueta?', respuesta: 'Mostrando un badge alternativo (ej: ✅) y aplicando estilos verdes.' },
      { pregunta: '¿Cómo haces el menú plegable de completadas?', respuesta: 'Con un boolean mostrarCompletadas que alterna render con @if.' },
      { pregunta: '¿Cómo mantienes completadas tras recargar?', respuesta: 'Guardando el campo completada en localStorage y cargándolo en ngOnInit.' },
    ],
  },

  {
    titulo: 'Comunicación Padre ↔ Hijo: Modal',
    items: [
      { pregunta: '¿Qué es @Input()?', respuesta: 'Permite al padre pasar datos al hijo (ej: abierto, mensaje, titulo).' },
      { pregunta: '¿Qué es @Output()?', respuesta: 'Permite al hijo emitir eventos al padre (ej: confirmar, cancelar).' },
      { pregunta: '¿Qué es EventEmitter?', respuesta: 'Clase para emitir eventos personalizados desde el hijo.' },
      { pregunta: '¿Cómo abre el padre el modal?', respuesta: 'Poniendo modalAbierto = true y pasando mensaje/título por Inputs.' },
      { pregunta: '¿Cómo se cierra el modal al cancelar?', respuesta: 'El hijo emite cancelar y el padre pone modalAbierto=false y limpia estado.' },
      { pregunta: '¿Cómo evitas que un click dentro cierre el modal?', respuesta: 'Con $event.stopPropagation() en el contenedor del modal.' },
      { pregunta: '¿Por qué renderizar el modal con @if?', respuesta: 'Para que no exista en DOM cuando está cerrado (limpio y eficiente).' },
      { pregunta: '¿Por qué es reutilizable?', respuesta: 'Porque el modal no depende de tareas: solo recibe texto/estado y emite eventos.' },
    ],
  },

  {
    titulo: 'AJAX + HttpClient: Pokédex',
    items: [
      { pregunta: '¿Qué es AJAX en Angular?', respuesta: 'Llamadas HTTP con HttpClient que devuelven Observables.' },
      { pregunta: '¿Para qué sirve provideHttpClient()?', respuesta: 'Registra HttpClient para poder hacer peticiones HTTP (standalone).' },
      { pregunta: '¿Por qué usar un servicio para HTTP?', respuesta: 'Separar lógica de datos del componente y reutilizar llamadas.' },
      { pregunta: '¿Qué devuelve HttpClient y por qué?', respuesta: 'Devuelve Observables para manejar async, cancelación y operadores RxJS.' },
      { pregunta: '¿Qué hace subscribe(next/error)?', respuesta: 'Ejecuta el Observable y gestiona respuesta correcta o error.' },
      { pregunta: '¿Qué hace finalize()?', respuesta: 'Ejecuta lógica al terminar (éxito o error), ideal para apagar loading.' },
      { pregunta: '¿Qué hace map() en el servicio?', respuesta: 'Transforma la respuesta de la API al formato que usa tu app.' },
      { pregunta: '¿Por qué “cargar todos” es 1 request?', respuesta: 'Porque la lista puede pedirse con limit grande; pedir detalle de todos sería miles de requests.' },
      { pregunta: '¿Por qué con status 200 podría no actualizarse la UI?', respuesta: 'Si no hay detección de cambios (zoneless), el estado cambia pero no se refresca la vista.' },
      { pregunta: '¿Qué es ChangeDetectorRef y cuándo usarlo?', respuesta: 'Permite forzar/avisar a Angular de cambios (markForCheck) cuando la vista no se actualiza.' },
      { pregunta: '¿Cómo hiciste búsqueda por nombre y número?', respuesta: 'Filtrando el array por includes en name y por igualdad en id.' },
      { pregunta: '¿Cómo funciona la paginación local?', respuesta: 'Calculas start=(page-1)*pageSize y haces slice(start, start+pageSize).' },
    ],
  },

  {
    titulo: 'CRUD con JSONPlaceholder (Posts)',
    items: [
      { pregunta: '¿Qué es JSONPlaceholder?', respuesta: 'Una API fake para practicar peticiones REST (GET/POST/PUT/DELETE) sin backend real.' },
      { pregunta: '¿Qué diferencia hay entre POST y PUT?', respuesta: 'POST crea; PUT reemplaza/actualiza un recurso existente (por id).' },
      { pregunta: '¿Por qué no persiste realmente?', respuesta: 'Porque es un servicio de prueba: responde como si guardara, pero no guarda en base de datos.' },
      { pregunta: '¿Qué es optimistic UI?', respuesta: 'Actualizar la UI antes de que llegue la respuesta del servidor.' },
      { pregunta: '¿Cómo hiciste optimistic create?', respuesta: 'Insertando un post con id temporal (negativo) y luego reemplazándolo por el devuelto.' },
      { pregunta: '¿Cómo revertiste si falla create?', respuesta: 'Eliminando el post temporal y mostrando error.' },
      { pregunta: '¿Cómo hiciste optimistic update?', respuesta: 'Actualizando el post en la lista y si falla, restaurando el anterior (backup).' },
      { pregunta: '¿Cómo hiciste optimistic delete?', respuesta: 'Quitando el post y si falla, restaurando la lista previa.' },
      { pregunta: '¿Qué validaciones mínimas hiciste?', respuesta: 'Título y body obligatorios (trim).' },
      { pregunta: '¿Para qué sirve el buscador del listado?', respuesta: 'Filtra por id/título/body para practicar binding y filtros en cliente.' },
    ],
  },

  {
    titulo: 'Depuración y problemas típicos',
    items: [
      { pregunta: '¿Cómo verificas si una request está saliendo?', respuesta: 'En DevTools → Network, revisando URL, status y respuesta.' },
      { pregunta: '¿Qué significa ver 200 pero no ver datos?', respuesta: 'Que la request funciona pero la UI no se actualiza o el componente no renderiza la lista.' },
      { pregunta: '¿Qué causa loaders infinitos?', respuesta: 'No apagar loading en error o no ejecutar finalize; o problemas de change detection.' },
      { pregunta: '¿Por qué finalize() ayuda?', respuesta: 'Porque se ejecuta siempre al finalizar la request (éxito o error).' },
      { pregunta: '¿Cómo sabes si el proyecto es standalone?', respuesta: 'Si main.ts usa bootstrapApplication y los componentes tienen standalone: true.' },
    ],
  },
  ];

  trackTitulo(_: number, b: Bloque) {
    return b.titulo;
  }
}
