import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDetailPage } from './check-detail.page';

describe('CheckDetailPage', () => {
  let component: CheckDetailPage;
  let fixture: ComponentFixture<CheckDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
