import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostShowPageComponent } from './post-show-page.component';

describe('PostShowPageComponent', () => {
  let component: PostShowPageComponent;
  let fixture: ComponentFixture<PostShowPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostShowPageComponent]
    });
    fixture = TestBed.createComponent(PostShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
