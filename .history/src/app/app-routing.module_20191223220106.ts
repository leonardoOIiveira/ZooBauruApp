import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'animal-info', loadChildren: './animal-info/animal-info.module#AnimalInfoPageModule' },
  { path: 'animal-info', loadChildren: './pages/animal-info/animal-info.module#AnimalInfoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
