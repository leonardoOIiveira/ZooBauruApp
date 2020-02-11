import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Secao } from 'src/app/interface/secao';

@Component({
  selector: 'app-secao-list',
  templateUrl: './secao-list.component.html',
  styleUrls: ['./secao-list.component.scss'],
})
export class SecaoListComponent implements OnInit {

  @Input() secoes: Secao[];
  @Output() secaoClicado = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  SecaoClicada(event) {
    this.secaoClicado.emit(event);
  }

}
