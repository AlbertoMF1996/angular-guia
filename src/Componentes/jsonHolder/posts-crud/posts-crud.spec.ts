import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCrud } from './posts-crud';

describe('PostsCrud', () => {
  let component: PostsCrud;
  let fixture: ComponentFixture<PostsCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
