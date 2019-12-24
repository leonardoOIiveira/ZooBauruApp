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
    console.log('in the constructor');
    this.route.queryParams.subscribe(params => {
      console.log('resposta');
      

      if(this.router.getCurrentNavigation().extras.state){
        this.animal = this.router.getCurrentNavigation().extras.state.animal;
        console.log(this.animal);
      } else {
        this.animal = {
          secao_zoo: "Grandes felinos",
          nome_popular: "Leão",
          nome_cientifico: "Panthera leo",
          incubacao: {
             gestacao: "100-119 dias"
          },
          longevidade: "15 anos",
          dist_geografica: "continente africano",
          habito_alimentar: "Carnívoro",
          curiosidade: "Leões e leoas são grandes predadores de savanas e regiões semidesérticas, podendo chegar a velocidade de 60 km/h em uma corrida. Vivem em grupos onde há um macho que irá ser o líder, caso o líder perca o posto para outro leão, este matará os filhotes do antigo líder.",
          risco_extincao: "VU",
          url_foto: "https://img.elo7.com.br/product/zoom/1CC2454/quadro-decorativo-animais-leao-decoracao-com-moldura-00-quadro-leao-arte-moderna.jpg"
       };
      }
    })
  }

  ngOnInit() {
    console.log("hello"); 
  }

  Voltar() {
    this.router.navigate(['tabs/list']);
  }

}
