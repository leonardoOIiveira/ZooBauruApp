import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/animal';
import animaisZoo from '../../../assets/database/animais.json';
import { DatabaseService } from 'src/app/services/database.service.js';
import { NavController } from '@ionic/angular';
import { AnimalInfoPage } from '../animal-info/animal-info.page.js';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public AnimalList: Animal[];
  constructor(private db: DatabaseService, 
              public navCtrl: NavController) {
    this.AnimalList = db.getAnimals();
  }

  ngOnInit() {
    console.log(this.AnimalList);
  }

  AnimalClicado(event){    
    this.navCtrl.navigateRoot('animal-info');
    console.log(event);
  }

}
