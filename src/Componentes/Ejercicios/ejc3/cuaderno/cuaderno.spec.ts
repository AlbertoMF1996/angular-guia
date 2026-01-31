import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuaderno } from './cuaderno';

describe('Cuaderno', () => {
  let component: Cuaderno;
  let fixture: ComponentFixture<Cuaderno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cuaderno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuaderno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
