import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent implements OnInit {

  @Input() private nomeAnimal: string;
  @Input() public urlFoto: string; 
  @Output() private onclick = new EventEmitter();

  constructor() { }

  ngOnInit() {}



}
