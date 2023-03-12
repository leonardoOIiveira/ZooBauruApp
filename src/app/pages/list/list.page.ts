import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/animal';
import animaisZoo from '../../../assets/database/animais.json';
import { DatabaseService } from 'src/app/services/database.service';
import { NavController } from '@ionic/angular';
import { AnimalInfoPage } from '../animal-info/animal-info.page.js';
import { NavigationExtras, Router } from '@angular/router';
import { Secao } from 'src/app/interface/secao.js';
import { Taxon } from 'src/app/interface/taxon.js';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public segmentView: string = 'animal';
  public AnimalList: Animal[];
  public SecoesList: Secao[];
  public TaxonList: Taxon[];

  constructor(private db: DatabaseService, 
              public router: Router) {
    this.AnimalList = db.getAnimals();
    this.SecoesList = db.getSecoes();
    this.TaxonList = [];  //TODO 
  }

  ngOnInit() {
    //console.log(this.AnimalList);
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

  SecaoClicado(event) {
    var navigationExtras: NavigationExtras = {
      state: {
        secao: event
      }
    }
    this.router.navigate(['secao-info'], navigationExtras);
  }

  TaxonClicado(event) {
    var navigationExtras: NavigationExtras = {
      state: {
        taxon: event
      }
    }
    this.router.navigate(['taxon-info'], navigationExtras);
  }

}
