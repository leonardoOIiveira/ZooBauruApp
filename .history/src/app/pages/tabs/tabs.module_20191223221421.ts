import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { ListPageModule } from '../list/list.module';
import { MapPageModule } from '../map/map.module';
import { SettingsPageModule } from '../settings/settings.module';
import { InfoPageModule } from '../info/info.module';
import { TabsRoutingModule } from './tabs-routing.module';
import { AnimalInfoPageModule } from '../animal-info/animal-info.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutingModule,
    ListPageModule,
    MapPageModule,
    SettingsPageModule,
    InfoPageModule, 
    AnimalInfoPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
