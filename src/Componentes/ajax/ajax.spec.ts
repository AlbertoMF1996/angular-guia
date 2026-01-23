import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajax } from './ajax';

describe('Ajax', () => {
  let component: Ajax;
  let fixture: ComponentFixture<Ajax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ajax]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ajax);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
