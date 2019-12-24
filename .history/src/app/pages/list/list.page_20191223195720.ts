import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/animal';
import { animaisZoo } from '../../../assets/database/animais.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public AnimalList: Animal[] = animaisZoo; 
  constructor() { }

  ngOnInit() {
  }

}
