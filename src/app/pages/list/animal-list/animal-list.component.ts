import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/interface/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {

  @Input() animais: Animal[];
  @Output() animalClicado = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  AnimalClicado(event) {
    console.log(event);
    this.animalClicado.emit(event);
  }

}
