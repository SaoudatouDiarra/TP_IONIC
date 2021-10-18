import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeApprenantsPageRoutingModule } from './liste-apprenants-routing.module';

import { ListeApprenantsPage } from './liste-apprenants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeApprenantsPageRoutingModule
  ],
  declarations: [ListeApprenantsPage]
})
export class ListeApprenantsPageModule {}
