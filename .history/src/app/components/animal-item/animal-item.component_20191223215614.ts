import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/interface/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent implements OnInit {

  @Input() public animal: Animal;
  @Output() private onclick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.urlFoto == ''){
      this.urlFoto = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
    }
  }

  Clicado() {
    this.onclick.emit({"id": this.id});
  }
}
