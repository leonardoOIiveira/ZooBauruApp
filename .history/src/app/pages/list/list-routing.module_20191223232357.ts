import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPage } from './list.page';

const routes: Routes = [
    {
        path: '',
        component: ListPage,
        children: [
            {
                path: 'animal-info', 
                loadChildren: './../animal-info/animal-info.module#AnimalInfoPageModule'
            }
        ]
    }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ListRoutingModule { }
