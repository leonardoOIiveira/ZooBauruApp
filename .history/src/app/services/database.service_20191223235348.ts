import { Injectable } from '@angular/core';
import animaisZoo from './../../assets/database/animais.json';
import { Animal } from '../interface/animal.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private AnimalListRaw: Animal[] = animaisZoo;
  private filteredAnimalList: Animal[];
  constructor() {
    this.filteredAnimalList = this.AnimalListRaw.filter((item, index, array) => {
      item.id = index;
      item.url_foto = item.url_foto == undefined ? '' : item.url_foto;
      return item.nome_popular != '';
    });
    this.filteredAnimalList.sort((a, b) => (a > b ? -1 : 1));
  }

  getAnimals() {
    return this.filteredAnimalList;
  }
}
