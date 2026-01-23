import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfForDemo } from './if-for-demo';

describe('IfForDemo', () => {
  let component: IfForDemo;
  let fixture: ComponentFixture<IfForDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfForDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfForDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
