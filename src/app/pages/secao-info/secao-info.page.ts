import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secao } from 'src/app/interface/secao';

@Component({
  selector: 'app-secao-info',
  templateUrl: './secao-info.page.html',
  styleUrls: ['./secao-info.page.scss'],
})
export class SecaoInfoPage implements OnInit {

  secao: Secao;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.secao = this.router.getCurrentNavigation().extras.state.secao;
      } else {
        this.Voltar();
      }
    })
  }

  ngOnInit() {
  }

  Voltar() {
    this.router.navigate(['tabs/list']);
  }
}
