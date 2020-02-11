import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoItemPage } from './secao-item.page';

describe('SecaoItemPage', () => {
  let component: SecaoItemPage;
  let fixture: ComponentFixture<SecaoItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
