import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonInfoPage } from './taxon-info.page';

describe('TaxonInfoPage', () => {
  let component: TaxonInfoPage;
  let fixture: ComponentFixture<TaxonInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
