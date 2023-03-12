import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(x => x.TabsPageModule) },
  { path: 'secao-info', loadChildren: () => import('./pages/secao-info/secao-info.module').then(x => x.SecaoInfoPageModule)  },
  { path: 'taxon-info', loadChildren: () => import('./pages/taxon-info/taxon-info.module').then(x => x.TaxonInfoPageModule)  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
