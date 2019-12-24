import { Injectable } from '@angular/core';
import animaisZoo from './../../assets/database/animais.json';
import { Animal } from '../interface/animal.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private AnimalListRaw: Animal[] = animaisZoo;
  private filteredAnimalList: Animal[];
  constructor() { }

  getAnimals() {
    return this.filteredAnimalList;
  }
}
