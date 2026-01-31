import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejc1 } from './ejc1';

describe('Ejc1', () => {
  let component: Ejc1;
  let fixture: ComponentFixture<Ejc1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejc1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejc1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
