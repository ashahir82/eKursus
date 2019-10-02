import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRecordPage } from './check-record.page';

describe('CheckRecordPage', () => {
  let component: CheckRecordPage;
  let fixture: ComponentFixture<CheckRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
