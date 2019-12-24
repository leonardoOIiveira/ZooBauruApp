import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalInfoPage } from './animal-info.page';

describe('AnimalInfoPage', () => {
  let component: AnimalInfoPage;
  let fixture: ComponentFixture<AnimalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
