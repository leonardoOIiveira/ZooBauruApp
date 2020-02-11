import { Injectable } from '@angular/core';
import animaisZoo from './../../assets/database/animais.json';
import secaoZoo from './../../assets/database/secoes.json';
import { Animal } from '../interface/animal.js';
import { Secao } from '../interface/secao.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private AnimalListRaw: Animal[] = animaisZoo;
  private SecoesListRaw: Secao[] = secaoZoo;

  private filteredAnimalList: Animal[];
  constructor() {
    this.filteredAnimalList = this.AnimalListRaw.filter((item, index, array) => {
      item.id = index;
      item.url_foto = item.url_foto == undefined ? '' : item.url_foto;
      return item.nome_popular != '';
    });
    this.filteredAnimalList = this.filteredAnimalList.sort((a, b) => (a.nome_popular < b.nome_popular ? -1 : 1));
  }

  getAnimals() {
    return this.filteredAnimalList;
  }

  getSecoes() {
    return this.SecoesListRaw; 
  }
}
