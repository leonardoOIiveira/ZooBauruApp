import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonListPage } from './taxon-list.page';

describe('TaxonListPage', () => {
  let component: TaxonListPage;
  let fixture: ComponentFixture<TaxonListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
