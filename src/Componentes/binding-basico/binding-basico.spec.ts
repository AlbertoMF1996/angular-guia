import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingBasico } from './binding-basico';

describe('BindingBasico', () => {
  let component: BindingBasico;
  let fixture: ComponentFixture<BindingBasico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingBasico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingBasico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
