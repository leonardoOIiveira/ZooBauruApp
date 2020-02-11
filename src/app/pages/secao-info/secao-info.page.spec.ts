import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoInfoPage } from './secao-info.page';

describe('SecaoInfoPage', () => {
  let component: SecaoInfoPage;
  let fixture: ComponentFixture<SecaoInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
