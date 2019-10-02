import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStatusPage } from './check-status.page';

describe('CheckStatusPage', () => {
  let component: CheckStatusPage;
  let fixture: ComponentFixture<CheckStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
