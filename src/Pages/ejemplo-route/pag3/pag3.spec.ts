import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag3 } from './pag3';

describe('Pag3', () => {
  let component: Pag3;
  let fixture: ComponentFixture<Pag3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pag3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pag3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
