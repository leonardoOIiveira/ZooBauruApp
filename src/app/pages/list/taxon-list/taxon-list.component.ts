import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Taxon } from 'src/app/interface/taxon';

@Component({
  selector: 'app-taxon-list',
  templateUrl: './taxon-list.component.html',
  styleUrls: ['./taxon-list.component.scss'],
})
export class TaxonListComponent implements OnInit {

  @Input() taxons: Taxon[];
  @Output() taxonClicado = new EventEmitter()
  constructor() { }

  ngOnInit() {}

  TaxonClicado(event) {
    this.taxonClicado.emit(event);
  }

}
