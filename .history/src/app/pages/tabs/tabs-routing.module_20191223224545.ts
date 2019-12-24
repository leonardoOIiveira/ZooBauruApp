import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
          {
            path: '',
            loadChildren: './../home/home.module#HomePageModule'
          },
          {
              path: 'list',
              loadChildren: './../list/list.module#ListPageModule'
          },
          {
            path: 'list/animal-info:id',
            loadChildren: './../animal-info/animal-info.module#AnimalInfoPageModule'
          },
          {
              path: 'info',
              loadChildren: './../info/info.module#InfoPageModule'
          },
          {
              path: 'map',
              loadChildren: './../map/map.module#MapPageModule'
          },
          {
              path: 'settings',
              loadChildren: './../settings/settings.module#SettingsPageModule'
          }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TabsRoutingModule { }
