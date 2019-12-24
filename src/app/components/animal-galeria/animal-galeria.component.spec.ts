import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalGaleriaPage } from './animal-galeria.page';

describe('AnimalGaleriaPage', () => {
  let component: AnimalGaleriaPage;
  let fixture: ComponentFixture<AnimalGaleriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalGaleriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalGaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
