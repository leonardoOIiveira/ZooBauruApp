import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPage } from './list.page';

const routes: Routes = [
    {
        path: '',
        component: ListPage,
    },
    {
        path: 'animal-info', 
        loadChildren: './../animal-info/animal-info.module#AnimalInfoPageModule'
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ListRoutingModule { }
