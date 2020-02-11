import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoListPage } from './secao-list.page';

describe('SecaoListPage', () => {
  let component: SecaoListPage;
  let fixture: ComponentFixture<SecaoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
