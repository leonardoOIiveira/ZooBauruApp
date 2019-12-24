import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { AnimalItemComponent } from 'src/app/components/animal-item/animal-item.component';
import { AnimalInfoPageModule } from '../animal-info/animal-info.module';
import { AnimalInfoPage } from '../animal-info/animal-info.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)  ],
  declarations: [
    ListPage,
    AnimalItemComponent
  ]
})
export class ListPageModule {}
