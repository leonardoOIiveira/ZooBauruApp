import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/interface/animal';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.page.html',
  styleUrls: ['./animal-info.page.scss'],
})
export class AnimalInfoPage implements OnInit {

  animal: any;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      console.log(params); 

      if(this.router.getCurrentNavigation().extras.state){
        this.animal = this.router.getCurrentNavigation().extras.state.animal;
      }
    })
  }

  ngOnInit() {
    console.log("hello");
  }

}
