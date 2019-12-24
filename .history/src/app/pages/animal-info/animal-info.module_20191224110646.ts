import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimalInfoPage } from './animal-info.page';
import { AnimalGaleriaComponent } from 'src/app/components/animal-galeria/animal-galeria.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AnimalInfoPage, 
    AnimalGaleriaComponent
  ]
})
export class AnimalInfoPageModule {}
