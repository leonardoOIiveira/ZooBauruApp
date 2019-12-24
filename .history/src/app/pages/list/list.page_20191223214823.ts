import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/animal';
import animaisZoo from '../../../assets/database/animais.json';
import { DatabaseService } from 'src/app/services/database.service.js';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public AnimalList: Animal[];
  constructor(private db: DatabaseService) {
    this.AnimalList = db.getAnimals();
  }

  ngOnInit() {
    console.log(this.AnimalList);
  }

  AnimalClicado(event){
    console.log(event);

  }

}
