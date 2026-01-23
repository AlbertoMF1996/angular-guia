import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasLocalstorage } from './tareas-localstorage';

describe('TareasLocalstorage', () => {
  let component: TareasLocalstorage;
  let fixture: ComponentFixture<TareasLocalstorage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasLocalstorage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasLocalstorage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
