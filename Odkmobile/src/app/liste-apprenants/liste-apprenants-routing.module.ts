import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeApprenantsPage } from './liste-apprenants.page';

const routes: Routes = [
  {
    path: '',
    component: ListeApprenantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeApprenantsPageRoutingModule {}
