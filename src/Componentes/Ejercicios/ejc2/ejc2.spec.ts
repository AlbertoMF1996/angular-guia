import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejc2 } from './ejc2';

describe('Ejc2', () => {
  let component: Ejc2;
  let fixture: ComponentFixture<Ejc2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejc2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejc2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
