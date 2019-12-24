import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/animal';
import animaisZoo from '../../../assets/database/animais.json';
import { DatabaseService } from 'src/app/services/database.service.js';
import { NavController } from '@ionic/angular';
import { AnimalInfoPage } from '../animal-info/animal-info.page.js';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public AnimalList: Animal[];
  constructor(private db: DatabaseService, 
              public router: Router) {
    this.AnimalList = db.getAnimals();
  }

  ngOnInit() {
    console.log(this.AnimalList);
  }

  AnimalClicado(event){    
    var navigationExtras: NavigationExtras = {
      state: {
        animal: event
      }
    }
    this.router.navigate(['animal-info'], navigationExtras);
    //console.log(event);
  }

}
