import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Secao } from 'src/app/interface/secao';

@Component({
  selector: 'app-secao-item',
  templateUrl: './secao-item.component.html',
  styleUrls: ['./secao-item.component.scss'],
})
export class SecaoItemComponent implements OnInit {

  @Input() public secao: Secao;
  @Output() private onclick = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.secao.foto = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
  }

  Clicado() {
    this.onclick.emit(this.secao);
  }

}
