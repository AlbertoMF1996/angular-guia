import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasConModal } from './tareas-con-modal';

describe('TareasConModal', () => {
  let component: TareasConModal;
  let fixture: ComponentFixture<TareasConModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasConModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasConModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
