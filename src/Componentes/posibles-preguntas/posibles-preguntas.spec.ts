import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosiblesPreguntas } from './posibles-preguntas';

describe('PosiblesPreguntas', () => {
  let component: PosiblesPreguntas;
  let fixture: ComponentFixture<PosiblesPreguntas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosiblesPreguntas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosiblesPreguntas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
