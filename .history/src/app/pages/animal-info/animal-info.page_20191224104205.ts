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
  risco_extinsao: {src: string, alt: string} = {src: 'src/assets/redlist/lc.png' , alt: 'Pouco preocupante'};
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
      switch(this.animal.risco_extincao){
        case "EX": 
          this.risco_extinsao.src = "src/assets/redlist/ex.png";
          this.risco_extinsao.alt = "Extinto";
          break;
        case "EW":  
          this.risco_extinsao.src = "src/assets/redlist/ew.png";
          this.risco_extinsao.alt = "Extinto na natureza";
          break;
        case "CR": 
          this.risco_extinsao.src = "src/assets/redlist/cr.png";
          this.risco_extinsao.alt = "Criticamente em perigo";
          break;
        case "EN": 
          this.risco_extinsao.src = "src/assets/redlist/en.png";
          this.risco_extinsao.alt = "Em perigo";
          break;
        case "VU": 
          this.risco_extinsao.src = "./src/assets/redlist/vu.png";
          this.risco_extinsao.alt = "Vulnerável";
          break;
        case "NT": 
          this.risco_extinsao.src = "src/assets/redlist/nt.png";
          this.risco_extinsao.alt = "Quase Ameaçada";
          break;
        case "LC": 
        default:
          this.risco_extinsao.src = "src/assets/redlist/lc.png";
          this.risco_extinsao.alt = "Pouco preocupante";
          break;
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
