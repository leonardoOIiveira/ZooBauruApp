import { Component, OnInit } from '@angular/core';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {  ViewChild, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit  {

  constructor(private screenOrientation: ScreenOrientation, public platform: Platform) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    console.log(platform.width());
    console.log(platform.height ());
    this.tamanho = this.platform.width();

    console.log(platform.platforms());
    /*console.log('x: ' + this.x);
    console.log('y: ' + this.y);
    console.log('z: ' + this.z);*/
  }
  card: any = '';
  tamanho: any = 14174;
  top: any = 0;
  left: any = 0;

  ngOnInit() {   
  }

}
