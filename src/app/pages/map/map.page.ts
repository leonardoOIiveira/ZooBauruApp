import { Component, OnInit } from '@angular/core';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  card : boolean = false;
  
  @ViewChild('slider',{ read: ElementRef }) slider: ElementRef;
  sliderOpts = {
    zoom :{
      maxRatio: 5
    }
  };
  logScrollStart(){
    console.log("logScrollStart : When Scroll Starts");
  }
 
  logScrolling(){
    console.log("logScrolling : When Scrolling");
  }
 
  logScrollEnd(){
    console.log("logScrollEnd : When Scroll Ends");
  }
  zoom(zoomIn: boolean) :void{
    let zoom = this.slider.nativeElement.swiper.zoom;
    if(zoomIn){
      zoom.in();
    }else{
      zoom.out();
    }
  }
  Card(abre: boolean){
    this.card = !this.card;
    console.log(this.card);
  }

  ngOnInit() {
  }

}
