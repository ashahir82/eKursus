import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOfferedPage } from './course-offered.page';

describe('CourseOfferedPage', () => {
  let component: CourseOfferedPage;
  let fixture: ComponentFixture<CourseOfferedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseOfferedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseOfferedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
