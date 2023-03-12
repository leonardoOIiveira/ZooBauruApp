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
            loadChildren: () => import('./../home/home.module').then(x => x.HomePageModule)
          },
          {
              path: 'list',
              loadChildren: () => import('./../list/list.module').then(x => x.ListPageModule)
              // loadChildren: './../list/list.module#ListPageModule'
          },
          {
              path: 'info',
              loadChildren: () => import('./../info/info.module').then(x => x.InfoPageModule)
              // loadChildren: './../info/info.module#InfoPageModule'
          },
          {
              path: 'map',
              loadChildren: () => import('./../map/map.module').then(x => x.MapPageModule)
              // loadChildren: './../map/map.module#MapPageModule'
          },
          {
              path: 'settings',
              loadChildren: () => import('./../settings/settings.module').then(x => x.SettingsPageModule)
              // loadChildren: './../settings/settings.module#SettingsPageModule'
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
