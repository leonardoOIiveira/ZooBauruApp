import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animal-galeria',
  templateUrl: './animal-galeria.component.html',
  styleUrls: ['./animal-galeria.component.scss'],
})
export class AnimalGaleriaComponent implements OnInit {

  @Input() fotos: {url: 'string', alt: string};
  
  constructor() { }

  ngOnInit() {}

}
