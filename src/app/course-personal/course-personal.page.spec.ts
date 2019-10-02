import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePersonalPage } from './course-personal.page';

describe('CoursePersonalPage', () => {
  let component: CoursePersonalPage;
  let fixture: ComponentFixture<CoursePersonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePersonalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
