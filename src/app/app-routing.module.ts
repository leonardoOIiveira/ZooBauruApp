import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },  { path: 'secao-info', loadChildren: './pages/secao-info/secao-info.module#SecaoInfoPageModule' },
  { path: 'taxon-info', loadChildren: './pages/taxon-info/taxon-info.module#TaxonInfoPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
