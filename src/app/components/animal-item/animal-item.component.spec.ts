import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalItemPage } from './animal-item.page';

describe('AnimalItemPage', () => {
  let component: AnimalItemPage;
  let fixture: ComponentFixture<AnimalItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
