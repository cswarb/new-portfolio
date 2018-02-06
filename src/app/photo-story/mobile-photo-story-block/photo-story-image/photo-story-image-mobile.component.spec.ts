import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoStoryImageComponent } from './photo-story-image.component';

describe('PostImageComponent', () => {
  let component: PhotoStoryImageComponent;
  let fixture: ComponentFixture<PhotoStoryImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoStoryImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoStoryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
