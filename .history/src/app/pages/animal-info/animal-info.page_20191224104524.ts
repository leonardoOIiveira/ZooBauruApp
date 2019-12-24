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
  risco_extinsao: {src: string, alt: string} = {src: 'assets/redlist/lc.png' , alt: 'Pouco preocupante'};
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

      this.risco_extinsao = this.returnImgExtincao(this.animal.risco_extincao);
      
    })
  }

  ngOnInit() {
    console.log("hello"); 
  }

  Voltar() {
    this.router.navigate(['tabs/list']);
  }

  returnImgExtincao(risco: string) {
    var obj = {
      src: '', 
      alt: ''
    };
    switch(risco){
      case "EX": 
        obj.src = "assets/redlist/ex.png";
        obj.alt = "Extinto";
        break;
      case "EW":  
        obj.src = "assets/redlist/ew.png";
        obj.alt = "Extinto na natureza";
        break;
      case "CR": 
        obj.src = "assets/redlist/cr.png";
        obj.alt = "Criticamente em perigo";
        break;
      case "EN": 
        obj.src = "assets/redlist/en.png";
        obj.alt = "Em perigo";
        break;
      case "VU": 
        obj.src = "assets/redlist/vu.png";
        obj.alt = "Vulnerável";
        break;
      case "NT": 
        obj.src = "assets/redlist/nt.png";
        obj.alt = "Quase Ameaçada";
        break;
      case "LC": 
      default:
        obj.src = "assets/redlist/lc.png";
        obj.alt = "Pouco preocupante";
        break;
    }

    return obj;
  }

}
